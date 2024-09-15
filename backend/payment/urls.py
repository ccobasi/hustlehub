from django.urls import path
from .views import PaymentUploadView, VerifyPaymentView


app_name = 'payment'

urlpatterns = [
    path('upload/', PaymentUploadView.as_view(), name='payment-upload'),
    path('verify/<int:payment_id>/', VerifyPaymentView.as_view(), name='verify-payment'),
]
