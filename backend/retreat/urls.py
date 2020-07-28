from django.conf.urls import include, url
from .views import ListRetreatsView

urlpatterns = [
    url(r'^', ListRetreatsView.as_view(), name="all-retreats"),
]
