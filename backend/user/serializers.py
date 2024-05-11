from tokenize import TokenError
from rest_framework import serializers
from .models import User
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


User = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2 = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'role', 'mobile_number', 'password', 'password2')

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
    email=serializers.EmailField(max_length=255)


    class Meta:
        fields=['email']

    def validate(self, attrs):
        email=attrs.get('email')
        if User.objects.filter(email=email).exists():
            user=User.objects.get(email=email)
            uidb64=urlsafe_base64_encode(smart_bytes(user.id))
            token=PasswordResetTokenGenerator().make_token(user)
            request=self.context.get( "request" )
            site_domain= get_current_site(request).domain
            relative_link=reverse('user:password-reset-confirm', kwargs={'uidb64':uidb64,'token':token})
            abslink=f"https://{site_domain} {relative_link}"
            email_body=f"Hi use the link below to reset your password \n {abslink}"
            data={
                'email_body':email_body,
                'email_subject':"Reset your  password",
                'to_email':user.email
            }
            send_normal_email(data)
        return super().validate(attrs)
    

class SetNewPasswordSerializer(serializers.Serializer):
    password=serializers.CharField(max_length=100, min_length=6, write_only=True)
    confirm_password=serializers.CharField(max_length=100, min_length=6, write_only=True)
    uidb64=serializers.CharField(write_only=True)
    token=serializers.CharField(write_only=True)

    class Meta:
        fields=['password', 'confirm password', 'uidb64', 'token']

    def validate(self, attrs):
        try:
            token=attrs.get('token')
            uidb64=attrs.get('uidb64')
            password=attrs.get('password')
            confirm_password=attrs.get('confirm_password')

            user_id=force_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=user_id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed("reset link is invalid or expired", 401)
            if password != confirm_password:
                raise AuthenticationFailed("passwords do not match")
            user.set_password(password)
            user.save()
            return user
        except Exception as e:
            return AuthenticationFailed("link is invalid or has expired")


        # return super().validate(attrs)


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