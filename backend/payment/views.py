from django.shortcuts import render
from rest_framework import views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Payment
from user.models import User
from django.utils.timezone import now
from rest_framework.exceptions import PermissionDenied

class PaymentUploadView(views.APIView):
    permission_classes = [IsAuthenticated]  

    def post(self, request):
        user = request.user
        amount = request.data.get('amount')
        payment_clip = request.FILES.get('payment_clip')

        if amount and payment_clip:
            payment = Payment.objects.create(user=user, amount=amount, payment_clip=payment_clip)
            return Response({"message": "Payment clip uploaded successfully. Awaiting verification."}, status=status.HTTP_201_CREATED)
        
        return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)


class VerifyPaymentView(views.APIView):
    permission_classes = [IsAuthenticated]  

    def post(self, request, payment_id):
        user = request.user

        if not user.is_staff and not user.is_superuser:
            raise PermissionDenied("You do not have permission to verify payments.")

        try:
            payment = Payment.objects.get(id=payment_id, status='pending')
            payment.status = 'verified'
            payment.verified_at = now()
            payment.user.credit_balance += payment.amount  
            payment.user.save()
            payment.save()
            return Response({"message": "Payment verified and balance updated."}, status=status.HTTP_200_OK)
        except Payment.DoesNotExist:
            return Response({"error": "Invalid payment"}, status=status.HTTP_404_NOT_FOUND)
