from django.urls import path, include
from .views import *
from user.views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'user'

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('verify-email/', VerifyUserEmail.as_view(), name='verify'),
    path('sign-in/', LoginUserView.as_view(), name='sign-in'),
    path('profile/', TestAuthenticationView.as_view(), name='granted'),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("user-auth", include("rest_framework.urls"))
]
