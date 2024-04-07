from django.urls import path, include
from .views import *
from user.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'user'

urlpatterns = [
    path('register/', CreateUserView.as_view(), name='register'),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("user-auth", include("rest_framework.urls"))
]
