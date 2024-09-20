from time import timezone
from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status # type: ignore
from rest_framework.views import APIView
from .models import Payment
from rest_framework.parsers import MultiPartParser
from .serializers import PaymentSerializer, PaymentCreateSerializer, PaymentStatusUpdateSerializer
import logging


class PaymentListView(generics.ListAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Payment.objects.filter(user=self.request.user)


# class PaymentCreateView(APIView):
#     parser_classes = [MultiPartParser]
#     serializer_class = PaymentCreateSerializer
#     permission_classes = [IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         serializer = PaymentCreateSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreatePaymentView(APIView):
    parser_classes = [MultiPartParser]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        payment_clip = request.FILES.get('payment_clip')
        amount = request.data.get('amount')

        print("Received request:", request.data, request.FILES)

        if not payment_clip or not amount:
            return Response({"error": "Missing payment clip or amount"}, status=status.HTTP_400_BAD_REQUEST)

        # Get the current user
        user = request.user

        if not user.is_authenticated:
            return Response({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

        # Create a new payment instance
        payment = Payment(user=user, amount=amount)

        # Save the file to the payment instance
        payment.payment_clip = payment_clip

        # Save the payment to the database
        payment.save()

        print("Payment created successfully!")

        return Response({"message": "Payment created"}, status=status.HTTP_201_CREATED)  
    
# View to retrieve payment details
class PaymentDetailView(generics.RetrieveAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Ensure that the logged-in user can only view their own payments
        return Payment.objects.filter(user=self.request.user)


# View to update payment status (admin only)
class PaymentUpdateView(generics.UpdateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentStatusUpdateSerializer
    permission_classes = [permissions.IsAdminUser]

    def patch(self, request, *args, **kwargs):
        payment = self.get_object()
        serializer = self.get_serializer(payment, data=request.data, partial=True)
        if serializer.is_valid():
            # If status is 'pending', verified_at is reset to None, else it's set to the current time
            serializer.save(verified_at=None if serializer.validated_data.get('status') == 'pending' else timezone.now())
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
