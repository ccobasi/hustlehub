from django.urls import path
from .views import ContractListCreateView, ContractDetailView

app_name = 'contract'

urlpatterns = [
    path('contracts/', ContractListCreateView.as_view(), name='contract-list'),
    path('contracts/<int:pk>/', ContractDetailView.as_view(), name='contract-detail'),
]
