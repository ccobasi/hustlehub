# from django.contrib.auth.models import BaseUserManager
# from django.core.exceptions import ValidationError
# from django.core.validators import validate_email, EmailValidator
# from django.db import IntegrityError
# from django.utils.translation import gettext_lazy as _
# from rest_framework.response import Response
# from rest_framework import status
# from .utils import send_code_to_user


# class UserManager(BaseUserManager):
#     def email_validator(self, email):
#         try:
#             validate_email(email)
#         except ValidationError:
#             raise ValueError(_("Please enter a valid email address"))


#     def create_user(self, email, first_name, last_name, role, mobile_number, password, **extra_fields):
#         try:
#             validate_email(email)
#         except ValidationError:
#             raise ValueError("Please enter a valid email address")

#         if not first_name:
#             raise ValueError("First name is required")
#         if not last_name:
#             raise ValueError("Last name is required")

#         user = self.model(email=email, first_name=first_name, last_name=last_name, role= role, mobile_number=mobile_number **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def post(self, request):
#         user_data = request.data
#         serializer = self.serializer_class(data=user_data)

#         if serializer.is_valid(raise_exception=True):
#             try:
#                 serializer.save()
#             except IntegrityError:
#                 # Email already exists, handle the error
#                 return Response({
#                     'error': 'A user with this email address already exists.'
#                 }, status=status.HTTP_400_BAD_REQUEST)

#             user = serializer.data
#             send_code_to_user(user['email'])
#             #send email function user['email']
#             print(user)
#             return Response({
#                 'data': user,
#                 'message': f"Hi, thanks for registering!"
#             }, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def create_superuser(self, email, first_name, last_name, password, **extra_fields):
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)
#         extra_fields.setdefault("is_verified", True)

#         if extra_fields.get("is_staff") is not True:
#             raise ValueError(_("is_staff must be true for admin user"))
        
#         if extra_fields.get("is_superuser") is not True:
#             raise ValueError(_("is_superuser must be true for admin user"))
        
#         user = self.create_user(email, first_name, last_name, password, **extra_fields)
#         user.save(using=self._db)
#         return user
   

from django.contrib.auth.models import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(_("Please enter a valid email address"))

    def create_user(self, email, first_name, last_name, role, mobile_number, password, **extra_fields):
        self.email_validator(email)
        if not first_name:
            raise ValueError(_("First name is required"))
        if not last_name:
            raise ValueError(_("Last name is required"))

        user = self.model(email=email, first_name=first_name, last_name=last_name, role=role, mobile_number=mobile_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_verified", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("is_staff must be true for admin user"))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("is_superuser must be true for admin user"))

        user = self.create_user(email, first_name, last_name, password, **extra_fields)
        user.save(using=self._db)
        return user