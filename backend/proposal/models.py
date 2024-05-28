from django.db import models
from django.utils.translation import gettext_lazy as _
from user.models import User
from project.models import Project

PROPOSAL_STATUS_CHOICES = (
    ('pending', 'Pending'),
    ('accepted', 'Accepted'),
    ('rejected', 'Rejected'),
)


class Proposal(models.Model):
 
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="proposals")
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="freelancer_proposals")
    proposed_rate = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Proposed Rate"))
    estimated_days = models.IntegerField(verbose_name=_("Estimated Completion Days"))
    cover_letter = models.TextField(verbose_name=_("Cover Letter"))
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Date Submitted"))
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=50, choices=PROPOSAL_STATUS_CHOICES, default="pending", verbose_name=_("Proposal Status"))


    def __str__(self):
        freelancer_name = self.freelancer.first_name + " " + self.freelancer.last_name  
        return f"{freelancer_name} - {self.project.title}"


