from django.urls import path
from .views import *


app_name = 'review'

urlpatterns = [
    path('contract/reviews/', ReviewCreateView.as_view(), name='review-create'),
    path('contract/<int:contract_id>/reviews/', ReviewListView.as_view(), name='review-list'),
    # path('freelancer/<int:freelancer_id>/reviews/', ReviewListView.as_view(), name='freelancer-review-list'),
    # path('freelancer/<int:freelancer_id>/reviews/', get_freelancer_reviews, name='get_freelancer_reviews'),
    path('freelancer/<int:freelancer_id>/reviews/', FreelancerReviewList.as_view(), name='freelancer-reviews'),
]
