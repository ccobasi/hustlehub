from django.db import models
from django.contrib.auth.models import AbstractUser


ROLE_CHOICES = (
    ('talent', 'Talent'),
    ('client', 'Client'),
)

class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=255, blank=True)
    mobile_number = models.CharField(max_length=20, blank=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, blank=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_groups',  
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_user_permissions',  
        blank=True
    )


    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
