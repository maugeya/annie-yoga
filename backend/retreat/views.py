from rest_framework import generics
from django.db.models import Q

from .models import Retreat
from .serializers import RetreatSerializer


class ListRetreatsView(generics.ListAPIView):
    queryset = Retreat.objects.filter(
        Q(retreat_location__is_active=True) & Q(is_active=True))
    serializer_class = RetreatSerializer
