from django.urls import path
from . import views


app_name = 'notification'

urlpatterns = [
    path('notifications/', views.notification_list, name='notification_list'),
    path('notifications/mark_as_read/<int:notification_id>/', views.mark_as_read, name='mark_as_read'),
]
