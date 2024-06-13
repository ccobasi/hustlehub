from django.contrib import admin
from .models import *

class ContractAdmin(admin.ModelAdmin):
    list_editable = ['project', 'proposal', 'freelancer', 'client', 'contract_amount', 'start_date', 'end_date', 'terms']
    list_display = ['id', 'project', 'proposal', 'freelancer', 'client', 'contract_amount', 'start_date', 'end_date', 'created_at', 'updated_at', 'terms']



admin.site.register(Contract, ContractAdmin)


