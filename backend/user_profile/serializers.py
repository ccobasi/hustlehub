from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import *
from rest_framework.exceptions import AuthenticationFailed

User = get_user_model()

class ClientProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')  

    bio = serializers.CharField(max_length=250, required=True)
    job_role = serializers.CharField(max_length=35, required=True)
    company = serializers.CharField(max_length=50, required=True)
    location = serializers.CharField(max_length=50, required=True)

    image = serializers.ImageField(required=False) 


    class Meta:
        model = ClientProfile
        fields = ['id', 'user', 'bio', 'job_role', 'company', 'location', 'image']

    def validate(self, attrs):
        # Custom validation logic
        bio = attrs['bio']
        job_role = attrs['job_role']
        company = attrs['company']
        location = attrs['location']

        if len(bio) < 10:
            raise serializers.ValidationError('Bio must be at least 10 characters long.')

        if not job_role.isalnum() or len(job_role) == 0:
            raise serializers.ValidationError('Job role can only contain letters and numbers and cannot be empty.')

        if len(company) == 0:
            raise serializers.ValidationError('Company name cannot be empty.')

        if len(location) == 0:
            raise serializers.ValidationError('Location cannot be empty.')

        return attrs

       

class FreelancerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerProfile
        fields = ['id', 'user', 'image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location']
