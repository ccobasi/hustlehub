from django.db import models
from user.models import User
from django.utils.translation import gettext_lazy as _


CATEGORY_CHOICES = (
        ('agriculture', 'Agriculture'),
        ('construction', 'Construction'),
        ('education', 'Education'),
        ('electrical', 'Electrical'),
        ('it', 'IT'),        
        ('other', 'Other'),
    )

class Project(models.Model):
    
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name="client_projects")
    title = models.CharField(max_length=255, verbose_name=_("Project Title"))
    description = models.TextField(verbose_name=_("Project Description"))
    budget = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Project Budget"))
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, verbose_name=_("Project Category"), blank=True)
    skills_required = models.TextField(verbose_name=_("Skills Required"), blank=True)
    closing_date = models.DateField(verbose_name=_("Project Closing Date"))
    is_open = models.BooleanField(default=True, verbose_name=_("Project Open Status"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Date Created"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Date Updated"))

    def __str__(self):
        return self.title

