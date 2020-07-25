from django.contrib import admin
from django.conf.urls import include, url

from yoga_classes import urls as yoga_classes_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^classes/', include(yoga_classes_urls)),
]
