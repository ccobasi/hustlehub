from rest_framework import serializers
from .models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2=serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model=User
        fields = ('email', 'first_name', 'last_name', 'role', 'phone', 'password', 'password2')

    def validate(self, attrs):
        pasword= attrs.get('password', '')
        pasword2= attrs.get('password2', '')
        if pasword != pasword2:
            raise serializers.ValidationError({'error': "Password doesn't match"})
        return attrs
    
    def create(self, validated_data):
        user=User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            role=validated_data.get('role'),
            phone=validated_data.get('phone'),
            password=validated_data['password']
        )
        return user
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ['id', 'username', 'email', 'password', 'full_name', 'mobile_number', 'role']
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = CustomUser.objects.create_user(**validated_data)
#         return user


# class NoteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Note
#         fields = ["id", "title", "content", "created_at", "author"]
#         extra_kwargs = {"author": {"read_only": True}}