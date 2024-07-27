from django.db.models.signals import post_save
from django.dispatch import receiver
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer # type: ignore
from proposal.models import Proposal
from contract.models import Contract
from review.models import Reviews

channel_layer = get_channel_layer()

@receiver(post_save, sender=Proposal)
def notify_proposal_submission(sender, instance, created, **kwargs):
    if created:
        message = f"A new proposal has been submitted for your project '{instance.project.title}'."
        async_to_sync(channel_layer.group_send)(
            f"notifications_{instance.project.client.id}",
            {
                "type": "send_notification",
                "message": message,
            }
        )

@receiver(post_save, sender=Contract)
def notify_contract_creation(sender, instance, created, **kwargs):
    if created:
        client_message = f"A contract has been created for your project '{instance.project.title}'."
        freelancer_message = f"A contract has been created for your project '{instance.project.title}'."
        async_to_sync(channel_layer.group_send)(
            f"notifications_{instance.client.id}",
            {
                "type": "send_notification",
                "message": client_message,
            }
        )
        async_to_sync(channel_layer.group_send)(
            f"notifications_{instance.freelancer.id}",
            {
                "type": "send_notification",
                "message": freelancer_message,
            }
        )

@receiver(post_save, sender=Reviews)
def notify_review_submission(sender, instance, created, **kwargs):
    if created:
        message = f"You have received a new review for the contract of project '{instance.contract.project.title}'."
        async_to_sync(channel_layer.group_send)(
            f"notifications_{instance.freelancer.id}",
            {
                "type": "send_notification",
                "message": message,
            }
        )
