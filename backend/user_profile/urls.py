from django.urls import path
from .views import *


app_name = 'user_profile'


urlpatterns = [
    path('client-profile/', ClientProfileView.as_view(), name='client_profile'),
    
    path('client-profile/create/<int:id>/', create_client_profile, name='create_client_profile'),
    path('client-profile/<int:pk>/', ClientProfileView.as_view(), name='client_profile'),
    path('freelancer-profile/', FreelancerProfileView.as_view(), name='freelancer_profile'),
]
