from django.contrib import admin
from .models import ClientProfile, FreelancerProfile

class ClientProfileAdmin(admin.ModelAdmin):
    list_editable = ['image', 'bio', 'job_role', 'company', 'location', 'review']
    list_display = ['user', 'image', 'bio', 'job_role', 'company', 'location', 'review']


class FreelancerProfileAdmin(admin.ModelAdmin):
    list_editable = ['image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location', 'review']
    list_display = ['user', 'image', 'bio', 'job_role', 'company', 'start_date', 'end_date', 'institution', 'qualification', 'year_obtained', 'skills', 'language', 'location', 'review']

admin.site.register(ClientProfile),
admin.site.register(FreelancerProfile)
