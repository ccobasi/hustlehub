from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    reviewer_name = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ['contract', 'reviewer', 'reviewer_name', 'rating', 'comment']
        read_only_fields = ['reviewer']
        
    
    def get_reviewer_name(self, obj):
        return f"{obj.reviewer.first_name} {obj.reviewer.last_name}"