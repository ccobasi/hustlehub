from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls', namespace='user')),
    path('social_account/', include('social_account.urls', namespace='social_account')),
    path('user_profile/', include('user_profile.urls', namespace='user_profile')),
    path('project/', include('project.urls', namespace='project')),
    path('proposal/', include('proposal.urls', namespace='proposal')),
    path('contract/', include('contract.urls', namespace='contract')),
    path('review/', include('review.urls', namespace='review')),
    path('notification/', include('notification.urls', namespace='notification')),
    path('payment/', include('payment.urls', namespace='payment')),
]

urlpatterns += static(settings.MEDIA_URL,
document_root=settings.MEDIA_ROOT)