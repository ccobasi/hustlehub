from django.urls import path

from . import views

app_name = "project"

urlpatterns = [
  path('projects/', views.ProjectListCreateView.as_view(), name='project-list'),
  path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
]
