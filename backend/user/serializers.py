from tokenize import TokenError
from rest_framework import serializers
from .models import User
# from .onetimepassword import OneTimePassword
from django.contrib.auth import get_user_model, authenticate
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import smart_str, smart_bytes, force_str
from django.urls import reverse
from .utils import send_normal_email
from rest_framework_simplejwt.tokens  import RefreshToken, Token
from user_profile.models import ClientProfile
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.template.loader import render_to_string
from django.utils.crypto import get_random_string
from django.conf import settings

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

User = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2 = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'role', 'mobile_number', 'password', 'password2')

    def validate(self, attrs):
        password = attrs.get('password', '')
        password2 = attrs.get('password2', '')
        if password != password2:
            raise serializers.ValidationError({'error': "Passwords don't match"})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2', None)

        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            role=validated_data.get('role'),
            mobile_number=validated_data.get('mobile_number'),
            password=validated_data['password'],
        )

        return user


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=6)
    password = serializers.CharField(write_only=True, max_length=68)
    full_name = serializers.CharField(read_only=True, max_length=255)
    role = serializers.CharField(read_only=True, max_length=15)
    is_verified = serializers.BooleanField(read_only=True)
    access_token = serializers.CharField(read_only=True, max_length=255)
    refresh_token = serializers.CharField(read_only=True, max_length=255)

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'full_name', 'is_verified', 'access_token', 'refresh_token', 'role']

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
        user_role = user.get_role()

        # create ClientProfile object if it doesn't already exist
        if not ClientProfile.objects.filter(user=user).exists():
            ClientProfile.objects.create(user=user)

        return {
            'id': user.id,
            'email': user.email, 
            'full_name': user.get_full_name,
            'access_token': str(user_tokens.get('access')),
            'refresh_token': str(user_tokens.get('refresh')),
            'role': user_role,
        }
    
    def create_client_profile(self, user):
        if not ClientProfile.objects.filter(user=user).exists():
            ClientProfile.objects.create(user=user)



class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            
            frontend_domain = settings.FRONTEND_DOMAIN  
            
            relative_link = reverse('user:password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})
            abslink = f"http://{frontend_domain}/password-reset-confirm/{uidb64}/{token}"
            
            email_body = f"Hi, use the link below to reset your password:\n{abslink}"
            data = {
                'email_body': email_body,
                'email_subject': "Reset your password",
                'to_email': user.email
            }
            send_normal_email(data)
        
        return super().validate(attrs)

    def create(self, validated_data):
        return validated_data
    

class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True)

    def validate_password(self, value):
        validate_password(value)
        return value

    def save(self, **kwargs):
        user = self.context['user']
        password = self.validated_data['password']
        user.set_password(password)
        user.save()
        return user


class LogoutUserSerializer(serializers.Serializer):
    refresh_token=serializers.CharField()

    default_error_messages={
        'bad_token':('Token is Invalid or has expired')
    }


    def  validate(self, attrs):
        self.token=attrs.get('refresh_token')
        return attrs
    
    def save(self, **kwargs):
        try:
            token=RefreshToken(self.token)
            token.blacklist()

        except TokenError:
            return self.fail('bad_token')

        # return super().validate(attrs)