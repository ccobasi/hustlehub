from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Proposal, Contract, Reviews, Notification

@receiver(post_save, sender=Proposal)
def notify_proposal_submission(sender, instance, created, **kwargs):
    if created:
        message = f"A new proposal has been submitted for your project '{instance.project.title}'."
        Notification.objects.create(
            recipient=instance.project.client,
            message=message
        )

@receiver(post_save, sender=Contract)
def notify_contract_creation(sender, instance, created, **kwargs):
    if created:
        client_message = f"A contract has been created for your project '{instance.project.title}'."
        freelancer_message = f"A contract has been created for your project '{instance.project.title}'."
        Notification.objects.create(
            recipient=instance.client,
            message=client_message
        )
        Notification.objects.create(
            recipient=instance.freelancer,
            message=freelancer_message
        )

@receiver(post_save, sender=Reviews)
def notify_review_submission(sender, instance, created, **kwargs):
    if created:
        message = f"You have received a new review for the contract of project '{instance.contract.project.title}'."
        Notification.objects.create(
            recipient=instance.freelancer,
            message=message
        )
