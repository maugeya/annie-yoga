from rest_framework import serializers
from .models import YogaClass


class YogaClassSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
