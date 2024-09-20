from rest_framework import serializers
from .models import Dispute

class DisputeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dispute
        fields = [
            'id',  # Include if you want to return the ID of the dispute
            'user',
            'contract',
            'payment',
            'reason',
            'status',
            'admin_notes',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']  # Make certain fields read-only

    def create(self, validated_data):
        # Optionally, you can customize the creation logic
        return Dispute.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Optionally, you can customize the update logic
        instance.reason = validated_data.get('reason', instance.reason)
        instance.contract = validated_data.get('contract', instance.contract)
        instance.payment = validated_data.get('payment', instance.payment)
        instance.status = validated_data.get('status', instance.status)
        instance.admin_notes = validated_data.get('admin_notes', instance.admin_notes)
        instance.save()
        return instance
