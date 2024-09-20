from django.contrib import admin
from .models import Payment


class PaymentAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'amount', 'payment_clip', 'status', 'created_at', 'verified_at' ]

   
admin.site.register(Payment, PaymentAdmin),

