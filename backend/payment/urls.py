from django.urls import path
from .views import PaymentListView, PaymentDetailView, PaymentUpdateView, CreatePaymentView



app_name = 'payment'

urlpatterns = [
    path('payments/', PaymentListView.as_view(), name='payment-list'),
    # path('payments/create/', PaymentCreateView.as_view(), name='payment-create'),
    path('payments/create/', CreatePaymentView.as_view(), name='create-payment'),
    path('payments/<int:pk>/', PaymentDetailView.as_view(), name='payment-detail'),
    path('payments/<int:pk>/update-status/', PaymentUpdateView.as_view(), name='payment-update-status'),
]
