# from time import timezone
# from rest_framework import serializers
# from .models import Payment


# class PaymentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Payment
#         fields = ['id', 'user', 'amount', 'payment_clip', 'status', 'created_at', 'verified_at']
#         read_only_fields = ['id', 'user', 'created_at', 'verified_at']



# class PaymentCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Payment
#         fields = ['amount', 'payment_clip']

#     def create(self, validated_data):
        
#         validated_data['status'] = 'pending'
#         return super().create(validated_data)



# class PaymentStatusUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Payment
#         fields = ['status', 'verified_at']
#         read_only_fields = ['verified_at']

#     def update(self, instance, validated_data):
       
#         if validated_data.get('status') == 'verified':
#             instance.verified_at = timezone.now()
#         else:
#             instance.verified_at = None  
#         return super().update(instance, validated_data)
from django.utils.timezone import now
from rest_framework import serializers
from django.db import transaction
from .models import Payment, UserBalance
from decimal import Decimal


class PaymentSerializer(serializers.ModelSerializer):
    """Serializer for retrieving payment details."""
    user_email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = Payment
        fields = [
            'id',
            'user_email',  # Replace 'user' with 'user_email' for safety
            'amount',
            'payment_clip',
            'status',
            'created_at',
            'verified_at',
            'rejection_reason',
            'verified_by',
        ]
        read_only_fields = [
            'id',
            'user_email',
            'created_at',
            'verified_at',
            'rejection_reason',
            'verified_by',
        ]


class PaymentCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating a new payment."""
    class Meta:
        model = Payment
        fields = ['amount', 'payment_clip']

    def validate_amount(self, value):
        """Ensure amount is positive."""
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than 0.")
        return value

    def create(self, validated_data):
        """Create a payment with the requesting user and pending status."""
        validated_data['user'] = self.context['request'].user
        validated_data['status'] = Payment.Status.PENDING
        return super().create(validated_data)


class PaymentStatusUpdateSerializer(serializers.ModelSerializer):
    """Serializer for updating payment status (admin-only)."""
    rejection_reason = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Payment
        fields = ['status', 'rejection_reason']

    def validate_status(self, value):
        """Ensure valid status transitions."""
        if value not in [Payment.Status.VERIFIED, Payment.Status.REJECTED]:
            raise serializers.ValidationError(
                "Status can only be updated to 'verified' or 'rejected'."
            )
        if self.instance.status != Payment.Status.PENDING:
            raise serializers.ValidationError(
                "Can only update status from 'pending'."
            )
        return value

    def validate_rejection_reason(self, value):
        """Require rejection_reason if status is rejected."""
        status = self.initial_data.get('status')
        if status == Payment.Status.REJECTED and not value:
            raise serializers.ValidationError(
                "Rejection reason is required when status is 'rejected'."
            )
        return value

    def update(self, instance, validated_data):
        """Update payment status, verified_at, verified_by, and balance."""
        with transaction.atomic():
            status = validated_data.get('status')
            instance.status = status
            instance.verified_by = self.context['request'].user

            if status == Payment.Status.VERIFIED:
                instance.verified_at = now()
                instance.rejection_reason = None
                # Update user balance
                user_balance, _ = UserBalance.objects.get_or_create(user=instance.user)
                user_balance.balance = Decimal(str(user_balance.balance)) + instance.amount
                user_balance.save()
            else:  # status == Payment.Status.REJECTED
                instance.verified_at = None
                instance.rejection_reason = validated_data.get('rejection_reason')

            instance.save()
            return instance