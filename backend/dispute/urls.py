from django.urls import path
from .views import DisputeSubmitView, DisputeUpdateView


app_name = "dispute"

urlpatterns = [
    path('submit/', DisputeSubmitView.as_view(), name='submit-dispute'),
    path('update/<int:dispute_id>/', DisputeUpdateView.as_view(), name='update-dispute'),
]
