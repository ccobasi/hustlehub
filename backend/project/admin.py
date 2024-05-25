from django.contrib import admin
from .models import *

class ProjectAdmin(admin.ModelAdmin):
    list_editable = ['title', 'description', 'budget', 'category', 'skills_required', 'closing_date', 'is_open', 'client']
    list_display = ['id', 'title', 'description', 'budget', 'category', 'skills_required', 'closing_date', 'is_open', 'created_at', 'updated_at', 'client']



admin.site.register(Project, ProjectAdmin)

