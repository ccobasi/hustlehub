from django.shortcuts import render
from rest_framework import views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Dispute
from contract.models import Contract
from payment.models import Payment

class DisputeSubmitView(views.APIView):
    permission_classes = [IsAuthenticated]  # Only logged-in users can raise disputes

    def post(self, request):
        user = request.user
        reason = request.data.get('reason')
        contract_id = request.data.get('contract_id')
        payment_id = request.data.get('payment_id')

        if not reason:
            return Response({"error": "Reason for dispute is required."}, status=status.HTTP_400_BAD_REQUEST)

        contract = Contract.objects.filter(id=contract_id).first() if contract_id else None
        payment = Payment.objects.filter(id=payment_id).first() if payment_id else None

        dispute = Dispute.objects.create(user=user, reason=reason, contract=contract, payment=payment)
        return Response({"message": "Dispute submitted successfully.", "dispute_id": dispute.id}, status=status.HTTP_201_CREATED)


class DisputeUpdateView(views.APIView):
    permission_classes = [IsAdminUser]  # Only admins can review and resolve disputes

    def post(self, request, dispute_id):
        try:
            dispute = Dispute.objects.get(id=dispute_id, status__in=['open', 'in_review'])
            status = request.data.get('status')
            admin_notes = request.data.get('admin_notes')

            if status not in ['resolved', 'rejected']:
                return Response({"error": "Invalid status update."}, status=status.HTTP_400_BAD_REQUEST)

            dispute.status = status
            dispute.admin_notes = admin_notes
            dispute.save()

            return Response({"message": f"Dispute status updated to {status}."}, status=status.HTTP_200_OK)
        except Dispute.DoesNotExist:
            return Response({"error": "Dispute not found or already resolved."}, status=status.HTTP_404_NOT_FOUND)


