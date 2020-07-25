from rest_framework import generics
from .models import YogaClass
from .serializers import YogaClassSerializer


class ListYogaClassesView(generics.ListAPIView):
    queryset = YogaClass.objects.all()
    serializer_class = YogaClassSerializer
