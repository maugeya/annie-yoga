from django.contrib import admin
from django.conf.urls import include, url

from yoga_classes import urls as yoga_classes_urls
from retreat import urls as retreat_urls
from recipe import urls as recipe_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^classes/', include(yoga_classes_urls)),
    url(r'^retreats/', include(retreat_urls)),
    url(r'^recipes/', include(recipe_urls)),
]
