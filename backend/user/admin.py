from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    # list_editable = ['image', 'bio', 'job_role', 'company', 'location', 'review']
    list_display = ['id', 'email', 'first_name', 'last_name',]



admin.site.register(User)