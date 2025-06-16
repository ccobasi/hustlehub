from django.core.management.base import BaseCommand
from django.db import transaction
from payment.models import Payment, UserBalance
from decimal import Decimal

class Command(BaseCommand):
    help = 'Update user balances based on verified payments'

    def handle(self, *args, **kwargs):
        with transaction.atomic():
            for payment in Payment.objects.filter(status=Payment.Status.VERIFIED):
                user_balance, _ = UserBalance.objects.get_or_create(user=payment.user)
                # Ensure balance is a Decimal
                user_balance.balance = Decimal(str(user_balance.balance))
                # Add payment amount (already a Decimal)
                user_balance.balance += payment.amount
                user_balance.save()
                self.stdout.write(
                    self.style.SUCCESS(
                        f'Updated balance for {payment.user.email}: {user_balance.balance}'
                    )
                )