from django.urls import path
from .views import GoogleSignInView


app_name = 'social_account'

urlpatterns=[
    path('google/', GoogleSignInView.as_view(), name='google'),
]