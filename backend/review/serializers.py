from rest_framework import serializers
from .models import Reviews

class ReviewSerializer(serializers.ModelSerializer):
    reviewer_name = serializers.SerializerMethodField()
    freelancer_name = serializers.SerializerMethodField()


    class Meta:
        model = Reviews
        fields = ['contract', 'reviewer', 'freelancer_name', 'reviewer_name', 'rating', 'comment']
        read_only_fields = ['reviewer']
        
    
    def get_reviewer_name(self, obj):
        return f"{obj.reviewer.first_name} {obj.reviewer.last_name}"
    
    def get_freelancer_name(self, obj):
        return f"{obj.freelancer.first_name} {obj.freelancer.last_name}"