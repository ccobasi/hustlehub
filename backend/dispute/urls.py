from django.urls import path
from .views import DisputeSubmitView, DisputeUpdateView, DisputeListView


app_name = "dispute"

urlpatterns = [
    path('submit/', DisputeSubmitView.as_view(), name='submit-dispute'),
    path('update/<int:dispute_id>/', DisputeUpdateView.as_view(), name='update-dispute'),
    path('disputes/list/', DisputeListView.as_view(), name='dispute-list'),
]
