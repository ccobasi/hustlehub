# from django.urls import path
# from .views import PaymentListView, PaymentDetailView, PaymentUpdateView, CreatePaymentView



# app_name = 'payment'

# urlpatterns = [
#     path('payments/', PaymentListView.as_view(), name='payment-list'),
#     # path('payments/create/', PaymentCreateView.as_view(), name='payment-create'),
#     path('payments/create/', CreatePaymentView.as_view(), name='create-payment'),
#     path('payments/<int:pk>/', PaymentDetailView.as_view(), name='payment-detail'),
#     path('payments/<int:pk>/update-status/', PaymentUpdateView.as_view(), name='payment-update-status'),
# ]
from django.urls import path
from .views import PaymentListView, PaymentDetailView, PaymentUpdateView, PaymentCreateView, UserBalanceView, serve_payment_clip

app_name = 'payment'

urlpatterns = [
    path('payments/', PaymentListView.as_view(), name='payment-list'),
    path('payments/create/', PaymentCreateView.as_view(), name='payment-create'),
    path('payments/<int:pk>/', PaymentDetailView.as_view(), name='payment-detail'),
    path('payments/<int:pk>/update-status/', PaymentUpdateView.as_view(), name='payment-update-status'),
    path('balance/', UserBalanceView.as_view(), name='user-balance'),
    path('payments/<int:payment_id>/clip/', serve_payment_clip, name='payment-clip'),
]
