from django.urls import path
from .views import *


app_name = 'proposal'

urlpatterns = [
    path('projects/<int:project_pk>/proposals/', ProjectProposalsListView.as_view(), name='project-proposals-list'),
    path('proposals/', ProposalCreateView.as_view(), name='proposal-create'),
    path('projects/<int:project_pk>/proposals/<int:proposal_pk>/', ProposalDetailView.as_view(), name='proposal-detail'),
]
