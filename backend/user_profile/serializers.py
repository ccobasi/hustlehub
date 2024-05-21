import re
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import *
from rest_framework.exceptions import AuthenticationFailed

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')  
    bio = serializers.CharField(max_length=250, required=True)
    job_role = serializers.CharField(max_length=35, required=True)
    company = serializers.CharField(max_length=50, required=True)
    location = serializers.CharField(max_length=50, required=True)
    image = serializers.ImageField(required=False) 
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    institution = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    year_obtained = models.DateField(blank=True, null=True)
    skills = models.TextField(blank=True)
    language = models.CharField(max_length=250)


    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'bio', 'job_role', 'company', 'location', 'image', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language']

    def validate(self, attrs):
        # Custom validation logic
        bio = attrs['bio']
        job_role = attrs['job_role']
        company = attrs['company']
        location = attrs['location']

        if len(bio) < 10:
            raise serializers.ValidationError('Bio must be at least 10 characters long.')
        
        if not re.match(r'^[a-zA-Z0-9\s]+$', job_role) or len(job_role) == 0:
            raise serializers.ValidationError('Job role can only contain letters, numbers, and spaces and cannot be empty.')

        if len(company) == 0:
            raise serializers.ValidationError('Company name cannot be empty.')

        if len(location) == 0:
            raise serializers.ValidationError('Location cannot be empty.')

        return attrs
    

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


class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = ['image']

    def update(self, instance, validated_data):
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
       

class FreelancerProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')  

    bio = serializers.CharField(max_length=250, required=True)
    job_role = serializers.CharField(max_length=35, required=True)
    company = serializers.CharField(max_length=50, required=True)
    location = serializers.CharField(max_length=50, required=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    institution = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    year_obtained = models.DateField(blank=True, null=True)
    skills = models.TextField(blank=True)
    language = models.CharField(max_length=250)
    image = serializers.ImageField(required=False) 

    class Meta:
        model = FreelancerProfile
        fields = ['id', 'user', 'image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location']
