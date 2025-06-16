# from django.db import models
# from user.models import User

# PAYMENT_STATUS_CHOICES = [
#     ('pending', 'Pending'),
#     ('verified', 'Verified'),
#     ('rejected', 'Rejected'),
# ]

# class Payment(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     payment_clip = models.FileField(upload_to='payment_clips/')
#     status = models.CharField(max_length=10, choices=PAYMENT_STATUS_CHOICES, default='pending')
#     created_at = models.DateTimeField(auto_now_add=True)
#     verified_at = models.DateTimeField(blank=True, null=True)

#     def __str__(self):
#         return f"Payment by {self.user.email} - {self.status}"
from django.db import models
from django.core.validators import MinValueValidator, FileExtensionValidator
from django.utils import timezone
from user.models import User
from decimal import Decimal

def payment_clip_upload_path(instance, filename):
    """Generate dynamic upload path for payment clips."""
    return f'payment_clips/{instance.user.id}/{instance.created_at.strftime("%Y/%m/%d")}/{filename}'

class UserBalance(models.Model):
    """Model to track user's current balance."""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='balance')
    balance = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.00)]
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['user']),
        ]

    def __str__(self):
        return f"Balance for {self.user.email}: {self.balance}"

class Payment(models.Model):
    """Model to handle payment transactions."""
    class Status(models.TextChoices):
        PENDING = 'pending', 'Pending'
        VERIFIED = 'verified', 'Verified'
        REJECTED = 'rejected', 'Rejected'

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0.01)]
    )
    payment_clip = models.FileField(
        upload_to=payment_clip_upload_path,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'pdf'])]
    )
    status = models.CharField(
        max_length=10,
        choices=Status.choices,
        default=Status.PENDING
    )
    created_at = models.DateTimeField(auto_now_add=True)
    verified_at = models.DateTimeField(blank=True, null=True)
    verified_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='verified_payments',
        limit_choices_to={'is_staff': True}
    )
    rejection_reason = models.TextField(blank=True, null=True)

    class Meta:
        indexes = [
            models.Index(fields=['user']),
            models.Index(fields=['status']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"Payment by {self.user.email} - {self.status}"

# Signal to update UserBalance when Payment status changes
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import transaction

@receiver(post_save, sender=Payment)
def update_user_balance(sender, instance, created, **kwargs):
    """Update user balance when payment is verified."""
    with transaction.atomic():
        user_balance, _ = UserBalance.objects.get_or_create(user=instance.user)
        if instance.status == Payment.Status.VERIFIED and instance.verified_at:
            user_balance.balance += instance.amount
            user_balance.save()
        elif instance.status == Payment.Status.REJECTED:
            # No balance change for rejected payments
            pass

