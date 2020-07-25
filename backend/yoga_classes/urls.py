from django.conf.urls import include, url
from .views import ListYogaClassesView

urlpatterns = [
    url(r'^', ListYogaClassesView.as_view(), name="all-classes"),
]
