from django.urls import path
from .views import ReviewCreateView, ReviewListView


app_name = 'review'

urlpatterns = [
    path('contract/reviews/', ReviewCreateView.as_view(), name='review-create'),
    path('contract/<int:contract_id>/reviews/', ReviewListView.as_view(), name='review-list'),
]
