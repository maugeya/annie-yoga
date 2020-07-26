from rest_framework import serializers
from .models import YogaClass


class YogaClassSerializer(serializers.ModelSerializer):
    time = serializers.SerializerMethodField()

    class Meta:
        model = YogaClass
        fields = '__all__'

    def get_time(self, obj):
        class_time = obj.time

        return class_time.replace(hour=class_time.hour, minute=class_time.minute).strftime("%I:%M %p")
