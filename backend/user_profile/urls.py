from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static


app_name = 'user_profile'


urlpatterns = [    
    path('client-profile/<int:pk>/', ClientProfileView.as_view(), name='client_profile'),
    path('image/', ChangeImageAPIView.as_view(), name='change_image_view'),
    path('freelancer-profile/<int:pk>/', FreelancerProfileView.as_view(), name='freelancer_profile'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
