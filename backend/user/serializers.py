from rest_framework import serializers
from .models import User
from django.contrib.auth import get_user_model

User = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2 = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'role', 'mobile_number', 'password', 'password2')

    def validate(self, attrs):
        pasword = attrs.get('password', '')
        pasword2 = attrs.get('password2', '')
        if pasword != pasword2:
            raise serializers.ValidationError({'error': "Passwords don't match"})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            role=validated_data.get('role'),
            mobile_number=validated_data.get('mobile_number'),
            password=validated_data['password'],
            is_active=True,
            is_staff=False,
            is_superuser=False,
        )
        return user


