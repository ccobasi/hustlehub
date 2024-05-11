from django.contrib import admin
from .models import ClientProfile, FreelancerProfile
from user.models import  User

class ClientProfileAdmin(admin.ModelAdmin):
    list_editable = ['image', 'bio', 'job_role', 'company', 'location']
    list_display = ['id', 'user', 'image', 'bio', 'job_role', 'company', 'location']

   


class FreelancerProfileAdmin(admin.ModelAdmin):
    list_editable = ['image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location', 'review']
    list_display = ['user', 'image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location', 'review']

# admin.site.register(ClientProfile),
admin.site.register(ClientProfile, ClientProfileAdmin),
admin.site.register(FreelancerProfile)
