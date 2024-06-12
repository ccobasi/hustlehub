from django.db import models
from project.models import Project
from proposal.models import Proposal
from user.models import User
from django.utils.translation import gettext_lazy as _

class Contract(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="contracts")
    proposal = models.OneToOneField(Proposal, on_delete=models.CASCADE, related_name="contract")
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="freelancer_contracts")
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name="client_contracts")
    contract_amount = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Contract Amount"))
    start_date = models.DateField(verbose_name=_("Start Date"))
    end_date = models.DateField(verbose_name=_("End Date"))
    terms = models.TextField(verbose_name=_("Contract Terms"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Date Created"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Date Updated"))

    def __str__(self):
        return f"Contract for {self.project.title} between {self.client.username} and {self.freelancer.username}"
