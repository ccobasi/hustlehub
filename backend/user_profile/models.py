from django.db import models
from django.utils.translation import gettext_lazy as _
from user.models import User
from django.db.models.signals import post_save
import os




class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='user_profile') 
    image = models.ImageField(default='user.png', blank=True, null=True)
    bio = models.TextField(blank=True)
    job_role = models.CharField(verbose_name=_("Job Role"), max_length=100)
    company = models.CharField(verbose_name=_("Company"), max_length=100)
    location = models.CharField(verbose_name=_("Location"), max_length=100)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    institution = models.CharField(verbose_name=_("Institution"), max_length=100)
    qualification = models.CharField(verbose_name=_("Qualification"), max_length=100)
    year_obtained = models.DateField(blank=True, null=True)
    skills = models.TextField(blank=True)
    language = models.CharField(verbose_name=_("Language"), max_length=250)

    def __str__(self):
        return self.user.first_name  + "'s Profile"
    

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

post_save.connect(create_user_profile, sender=User)

                                

class ClientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='client_profile')
    image = models.ImageField(default='user.png', blank=True, null=True)
    bio = models.TextField(blank=True)
    job_role = models.CharField(verbose_name=_("Job Role"), max_length=100)
    company = models.CharField(verbose_name=_("Company"), max_length=100)
    location = models.CharField(verbose_name=_("Location"), max_length=100)
    
    # review = models.CharField(verbose_name=_("Review"), max_length=100)
    
    def __str__(self):
        return self.user.first_name  + "'s Profile"
    

def create_client_profile(sender, instance, created, **kwargs):
    if created:
        ClientProfile.objects.create(user=instance)

post_save.connect(create_client_profile, sender=User)

class FreelancerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='freelancer_profile')
    image = models.ImageField(default='user.png', null=True, blank=True)
    bio = models.TextField(blank=True)
    job_role = models.CharField(verbose_name=_("Job Role"), max_length=100)
    company = models.CharField(verbose_name=_("Company"), max_length=100, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    institution = models.CharField(verbose_name=_("Institution"), max_length=100)
    qualification = models.CharField(verbose_name=_("Qualification"), max_length=100)
    year_obtained = models.DateField(blank=True, null=True)
    skills = models.TextField(blank=True)
    language = models.CharField(verbose_name=_("Language"), max_length=250)
    location = models.CharField(verbose_name=_("Location"), max_length=100)
    # review = models.CharField(verbose_name=_("Review"), max_length=100)
    
    def __str__(self):
        return self.user.first_name  + "'s Profile"
    

def create_freelancer_profile(sender, instance, created, **kwargs):
    if created:
        FreelancerProfile.objects.create(user=instance)

post_save.connect(create_freelancer_profile, sender=User)