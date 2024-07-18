from django.urls import path
from .views import *

app_name = 'contract'

urlpatterns = [
    path('contracts/', ContractListCreateView.as_view(), name='contract-list'),
    path('contracts/<int:pk>/', ContractDetailView.as_view(), name='contract-detail'),
    # path('user/<int:user_id>/contracts/', UserContractsView.as_view(), name='user-contracts'),
    path('users/<int:user_id>/contracts/', ClientContractsView.as_view(), name='user-contracts'),
    path('user/<int:user_id>/contracts/', FreelancerContractsView.as_view(), name='user-contracts'),
    path('freelancer/contracts/', FreelancerContractsListView.as_view(), name='freelancer-contracts-list'),
    path('user/<int:user_id>/count/', UserContractsCountView.as_view(), name='user-contracts-count'),
]
