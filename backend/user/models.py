from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .manager import UserManager


ROLE_CHOICES = (
    ('talent', 'Talent'),
    ('client', 'Client'),
)

class User(AbstractUser, PermissionsMixin):
    email=models.EmailField(max_length=255, verbose_name=('Email Address'), unique=True)
    first_name = models.CharField(verbose_name=("First Name"), max_length=100)
    last_name = models.CharField(verbose_name=("Last Name"), max_length=100)
    mobile_number = models.CharField(max_length=20, blank=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, blank=True)
    is_superuser = models.BooleanField(default=False)
    is_verified=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["first name", "last name"]

    objects = UserManager()

    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def token(self):
        pass



# class CustomUser(AbstractUser):
#     full_name = models.CharField(max_length=255, blank=True)
#     mobile_number = models.CharField(max_length=20, blank=True)
#     role = models.CharField(max_length=50, choices=ROLE_CHOICES, blank=True)

#     groups = models.ManyToManyField(
#         'auth.Group',
#         related_name='customuser_groups',  
#         blank=True
#     )
#     user_permissions = models.ManyToManyField(
#         'auth.Permission',
#         related_name='customuser_user_permissions',  
#         blank=True
#     )


#     REQUIRED_FIELDS = ['email']

#     def __str__(self):
#         return self.username
