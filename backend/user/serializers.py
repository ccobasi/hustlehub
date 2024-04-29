from rest_framework import serializers
from .models import User
from django.contrib.auth import get_user_model, authenticate
from rest_framework.exceptions import AuthenticationFailed

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


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=6)
    password = serializers.CharField(write_only=True, max_length=68)
    full_name = serializers.CharField(read_only=True, max_length=255)
    is_verified = serializers.BooleanField(read_only=True)
    access_token = serializers.CharField(read_only=True, max_length=255)
    refresh_token = serializers.CharField(read_only=True, max_length=255)

    class Meta:
        model = User
        fields = ['email', 'password', 'full_name', 'is_verified', 'access_token', 'refresh_token']

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        request = self.context.get('request')
        user = authenticate(email=email, password=password, request=request)

        if not user:
            raise AuthenticationFailed("Invalid credentials. Please try again.")
        if not user.is_verified:
            raise AuthenticationFailed("Email is not verified.")
        user_tokens = user.token()

        return {
            'email': user.email, 
            'full_name': user.get_full_name,
            'access_token': str(user_tokens.get('access')),
            'refresh_token': str(user_tokens.get('refresh')),
        }