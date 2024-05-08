from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *

User = get_user_model()

class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = ['id', 'user', 'image', 'bio', 'job_role', 'company', 'location', 'review']

class FreelancerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerProfile
        fields = ['id', 'user', 'image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location', 'review']
