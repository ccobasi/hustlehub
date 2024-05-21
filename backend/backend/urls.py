from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls', namespace='user')),
    path('social_account/', include('social_account.urls', namespace='social_account')),
    path('user_profile/', include('user_profile.urls', namespace='user_profile')),
    path('project/', include('project.urls', namespace='project'))
]
