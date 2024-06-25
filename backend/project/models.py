from django.db import models
from user.models import User
from django.utils.translation import gettext_lazy as _


CATEGORY_CHOICES = (
        ('accounting & finance', 'Accounting & Finance'),
        ('administrative & customer support', 'Administrative & Customer Support'),
        ('agriculture', 'Agriculture'),
        ('art & design', 'Art & Design'),
        ('business & management', 'Business & Management'),
        ('cleaning services', 'Cleaning Services'),
        ('computer & it', 'Computer & IT'),
        ('education', 'Education'),
        ('engineering & architecture', 'Engineering & Architecture'),  
        ('food & hospitality', 'Food & Hospitality'),
        ('healthcare', 'Healthcare'),
        ('human resources', 'Human Resources'),
        ('marketing & content creation', 'Marketing & Content Creation'),
        ('media & entertainment', 'Media & Entertainment'),
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
    selected_proposal = models.OneToOneField('proposal.Proposal', null=True, blank=True, on_delete=models.SET_NULL, related_name='selected_for_project')



    def __str__(self):
        return self.title


class Milestone(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='milestones')
    title = models.CharField(max_length=255)
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateTimeField()
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Transaction(models.Model):
    milestone = models.ForeignKey(Milestone, on_delete=models.CASCADE, related_name='transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_date = models.DateTimeField(auto_now_add=True)
    is_released = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Transaction for {self.milestone.title}"