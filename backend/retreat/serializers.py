from rest_framework import serializers
from .models import Retreat


class RetreatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Retreat
        fields = '__all__'
