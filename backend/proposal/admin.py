from django.contrib import admin
from .models import Proposal


class ProposalAdmin(admin.ModelAdmin):
    list_display = ['id', 'project', 'freelancer', 'proposed_rate', 'estimated_days', 'submitted_at', 'status' ]

   
admin.site.register(Proposal, ProposalAdmin),

