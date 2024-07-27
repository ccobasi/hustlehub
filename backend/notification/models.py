from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

User = get_user_model()

class Notification(models.Model):
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField(verbose_name=_("Notification Message"))
    read = models.BooleanField(default=False, verbose_name=_("Read Status"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Date Created"))

    def __str__(self):
        return f"Notification for {self.recipient.email} - {self.message[:20]}"

