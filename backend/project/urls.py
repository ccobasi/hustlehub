from django.urls import path
from .views import *
from . import views

app_name = "project"

urlpatterns = [
  path('projects/', views.ProjectListCreateView.as_view(), name='project-list'),
  path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
  path('user/<int:pk>/projects/<int:project_pk>/', UserProjectList.as_view()),
  path('user/<int:user_pk>/projects/', UserProjectList.as_view()),
]
