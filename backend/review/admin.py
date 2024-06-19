from django.contrib import admin
from .models import *

class ReviewAdmin(admin.ModelAdmin):
    list_editable = ['contract', 'rating', 'comment']
    list_display = ['id', 'contract', 'reviewer', 'rating', 'comment', 'created_at']



admin.site.register(Review, ReviewAdmin)

