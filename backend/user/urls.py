from django.urls import path
from .views import RegisterUserView, VerifyUserEmail, LoginUserView, TestAuthenticationView, PasswordResetRequestView, PasswordResetConfirm, SetNewPassword, LogoutUserView, send_test_email

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

app_name = 'user'

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('verify-email/<uuid:token>/', VerifyUserEmail.as_view(), name='verify-email'),
    # path('verify-email/<str:token>/', VerifyUserEmail.as_view(), name='verify-email'),
    path('sign-in/', LoginUserView.as_view(), name='sign-in'),
    path('profile/', TestAuthenticationView.as_view(), name='granted'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password_reset'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirm.as_view(), name='password-reset-confirm'),
    path('set-new-password/',  SetNewPassword.as_view(), name="set-new-password"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path('logout/', LogoutUserView.as_view(), name='logout'),
    path('send-test-email/', send_test_email),
    
    # path('generate-otp/', views.generate_otp, name='generate_otp'),
    # path('verify-otp/', views.verify_otp, name='verify_otp'),
    # path("user-auth", include("rest_framework.urls"))
]
