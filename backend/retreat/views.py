from rest_framework import generics
from .models import Retreat
from .serializers import RetreatSerializer


class ListRetreatsView(generics.ListAPIView):
    queryset = Retreat.objects.all()
    serializer_class = RetreatSerializer
