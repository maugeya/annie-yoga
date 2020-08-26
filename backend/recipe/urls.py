from django.conf.urls import include, url
from .views import ListRecipesView

urlpatterns = [
    url(r'^', ListRecipesView.as_view(), name="all-recipes"),
]
