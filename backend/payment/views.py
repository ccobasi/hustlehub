# from time import timezone
# from rest_framework import generics, permissions
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from rest_framework import status # type: ignore
# from rest_framework.views import APIView
# from .models import Payment
# from rest_framework.parsers import MultiPartParser
# from .serializers import PaymentSerializer, PaymentCreateSerializer, PaymentStatusUpdateSerializer
# import logging


# class PaymentListView(generics.ListAPIView):
#     queryset = Payment.objects.all()
#     serializer_class = PaymentSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return Payment.objects.filter(user=self.request.user)


# # class PaymentCreateView(APIView):
# #     parser_classes = [MultiPartParser]
# #     serializer_class = PaymentCreateSerializer
# #     permission_classes = [IsAuthenticated]

# #     def create(self, request, *args, **kwargs):
# #         serializer = PaymentCreateSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save(user=request.user)
# #             return Response(serializer.data, status=status.HTTP_201_CREATED)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class CreatePaymentView(APIView):
#     parser_classes = [MultiPartParser]
#     permission_classes = [IsAuthenticated]

#     def post(self, request, *args, **kwargs):
#         payment_clip = request.FILES.get('payment_clip')
#         amount = request.data.get('amount')

#         print("Received request:", request.data, request.FILES)

#         if not payment_clip or not amount:
#             return Response({"error": "Missing payment clip or amount"}, status=status.HTTP_400_BAD_REQUEST)

#         # Get the current user
#         user = request.user

#         if not user.is_authenticated:
#             return Response({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

#         # Create a new payment instance
#         payment = Payment(user=user, amount=amount)

#         # Save the file to the payment instance
#         payment.payment_clip = payment_clip

#         # Save the payment to the database
#         payment.save()

#         print("Payment created successfully!")

#         return Response({"message": "Payment created"}, status=status.HTTP_201_CREATED)  
    
# # View to retrieve payment details
# class PaymentDetailView(generics.RetrieveAPIView):
#     queryset = Payment.objects.all()
#     serializer_class = PaymentSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         # Ensure that the logged-in user can only view their own payments
#         return Payment.objects.filter(user=self.request.user)


# # View to update payment status (admin only)
# class PaymentUpdateView(generics.UpdateAPIView):
#     queryset = Payment.objects.all()
#     serializer_class = PaymentStatusUpdateSerializer
#     permission_classes = [permissions.IsAdminUser]

#     def patch(self, request, *args, **kwargs):
#         payment = self.get_object()
#         serializer = self.get_serializer(payment, data=request.data, partial=True)
#         if serializer.is_valid():
#             # If status is 'pending', verified_at is reset to None, else it's set to the current time
#             serializer.save(verified_at=None if serializer.validated_data.get('status') == 'pending' else timezone.now())
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from django.utils.timezone import now
from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from .models import Payment, UserBalance
from .serializers import PaymentSerializer, PaymentCreateSerializer, PaymentStatusUpdateSerializer
import logging
from decimal import Decimal
from django.db import transaction

logger = logging.getLogger(__name__)

class PaymentListView(generics.ListAPIView):
    """List all payments for the authenticated user."""
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return payments for the authenticated user only."""
        return Payment.objects.filter(user=self.request.user)

class PaymentCreateView(generics.CreateAPIView):
    """Create a new payment for the authenticated user."""
    serializer_class = PaymentCreateSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def perform_create(self, serializer):
        """Save the payment with the authenticated user."""
        serializer.save(user=self.request.user)
        logger.info(f"Payment created for user {self.request.user.email}")

class PaymentDetailView(generics.RetrieveAPIView):
    """Retrieve details of a specific payment for the authenticated user."""
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return payments for the authenticated user only."""
        return Payment.objects.filter(user=self.request.user)

class PaymentUpdateView(generics.UpdateAPIView):
    """Update payment status (admin-only)."""
    serializer_class = PaymentStatusUpdateSerializer
    permission_classes = [permissions.IsAdminUser]
    queryset = Payment.objects.all()

    def perform_update(self, serializer):
        """Save the updated payment and log the action."""
        serializer.save()
        logger.info(
            f"Payment {self.get_object().id} status updated to "
            f"{serializer.validated_data['status']} by {self.request.user.email}"
        )


class UserBalanceView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            balance, created = UserBalance.objects.get_or_create(
                user=request.user,
                defaults={'balance': Decimal('0.00')}
            )
            logger.info(f"Fetched balance for user {request.user.email}: {balance.balance}")
            return Response({'balance': float(balance.balance)})
        except Exception as e:
            logger.error(f"Error fetching balance for user {request.user.email}: {str(e)}")
            return Response(
                {'error': 'Failed to fetch balance'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

def serve_payment_clip(request, payment_id):
    payment = get_object_or_404(Payment, id=payment_id, user=request.user)
    if not payment.payment_clip:
        return Response({"error": "No payment clip available"}, status=status.HTTP_404_NOT_FOUND)
    file_path = payment.payment_clip.path
    return FileResponse(open(file_path, 'rb'), content_type='application/octet-stream')


class VerifyPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, payment_id):
        try:
            payment = Payment.objects.get(id=payment_id)
            if payment.status != "verified":
                payment.status = "verified"
                with transaction.atomic():
                    user_balance, created = UserBalance.objects.get_or_create(
                        user=payment.user,
                        defaults={"balance": 0.00}
                    )
                    user_balance.balance += payment.amount
                    user_balance.save()

                    payment.user.credit_balance += payment.amount
                    payment.user.save()
                    payment.save()
                return Response({"status": "verified"}, status=status.HTTP_200_OK)
            return Response({"detail": "Payment already verified"}, status=status.HTTP_400_BAD_REQUEST)
        except Payment.DoesNotExist:
            return Response({"detail": "Payment not found"}, status=status.HTTP_404_NOT_FOUND)