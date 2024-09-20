from django.shortcuts import render
from rest_framework import views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Dispute
from contract.models import Contract
from payment.models import Payment
import logging
from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)


class DisputeSubmitView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logger.info("Request data: %s", request.data)
        user = request.user
        reason = request.data.get('reason')
        contract_id = request.data.get('contract_id')
        payment_id = request.data.get('payment_id')

        if not reason:
            return Response({"error": "Reason for dispute is required."}, status=status.HTTP_400_BAD_REQUEST)

        contract = Contract.objects.filter(id=contract_id).first() if contract_id else None
        if contract_id and not contract:
            return Response({"error": "Invalid Contract ID."}, status=status.HTTP_400_BAD_REQUEST)

        payment = Payment.objects.filter(id=payment_id).first() if payment_id else None
        if payment_id and not payment:
            return Response({"error": "Invalid Payment ID."}, status=status.HTTP_400_BAD_REQUEST)

        dispute = Dispute.objects.create(user=user, reason=reason, contract=contract, payment=payment)
        return Response({"message": "Dispute submitted successfully.", "dispute_id": dispute.id}, status=status.HTTP_201_CREATED)
    

class DisputeUpdateView(views.APIView):
    permission_classes = [IsAdminUser]

    def post(self, request, dispute_id):
        try:
            dispute = Dispute.objects.get(id=dispute_id, status__in=['open', 'in_review'])
            status = request.data.get('status')
            admin_notes = request.data.get('admin_notes', '')

            if status not in ['resolved', 'rejected']:
                return Response({"error": "Invalid status update. Use 'resolved' or 'rejected'."}, status=status.HTTP_400_BAD_REQUEST)

            dispute.status = status
            dispute.admin_notes = admin_notes
            dispute.save()

            return Response({"message": f"Dispute status updated to {status}."}, status=status.HTTP_200_OK)
        except Dispute.DoesNotExist:
            return Response({"error": "Dispute not found or already resolved."}, status=status.HTTP_404_NOT_FOUND)
        

class DisputeListView(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if request.user.is_staff:
            disputes = Dispute.objects.all()  
        else:
            disputes = Dispute.objects.filter(user=user)  

        dispute_data = []
        for dispute in disputes:
            dispute_data.append({
                "id": dispute.id,
                "user": getattr(dispute.user, 'username', getattr(dispute.user, 'email', 'Unknown User')),
                "contract_id": dispute.contract.id if dispute.contract else None,
                "payment_id": dispute.payment.id if dispute.payment else None,
                "reason": dispute.reason,
                "status": dispute.get_status_display(),
                "admin_notes": dispute.admin_notes,
                "created_at": dispute.created_at,
                "updated_at": dispute.updated_at,
            })

        logger.info("Disputes retrieved: %s", dispute_data)
        return Response({"disputes": dispute_data}, status=status.HTTP_200_OK)
