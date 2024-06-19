from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    reviewer_name = serializers.ReadOnlyField(source='reviewer.username')

    class Meta:
        model = Review
        fields = ['id', 'contract', 'reviewer', 'reviewer_name', 'rating', 'comment', 'created_at']
        read_only_fields = ['reviewer', 'created_at']
