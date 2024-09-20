from time import timezone
from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'user', 'amount', 'payment_clip', 'status', 'created_at', 'verified_at']
        read_only_fields = ['id', 'user', 'created_at', 'verified_at']



class PaymentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['amount', 'payment_clip']

    def create(self, validated_data):
        
        validated_data['status'] = 'pending'
        return super().create(validated_data)



class PaymentStatusUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['status', 'verified_at']
        read_only_fields = ['verified_at']

    def update(self, instance, validated_data):
       
        if validated_data.get('status') == 'verified':
            instance.verified_at = timezone.now()
        else:
            instance.verified_at = None  
        return super().update(instance, validated_data)
