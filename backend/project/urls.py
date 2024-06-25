from django.urls import path
from .views import *
from . import views

app_name = "project"

urlpatterns = [
  path('projects/', views.ProjectListCreateView.as_view(), name='project-list'),
  path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
  path('user/<int:pk>/projects/<int:project_pk>/', UserProjectList.as_view()),
  path('user/<int:user_pk>/projects/', UserProjectList.as_view()),
  # path('milestones/', MilestoneViewSet.as_view({'get': 'list', 'post': 'create'}), name='milestone-list'),
  # path('milestones/<int:pk>/', MilestoneViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='milestone-detail'),
  # path('transactions/', TransactionViewSet.as_view({'get': 'list', 'post': 'create'}), name='transaction-list'),
  # path('transactions/<int:pk>/', TransactionViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='transaction-detail'),
]
