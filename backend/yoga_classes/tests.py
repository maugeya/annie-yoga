from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
import datetime

from .models import YogaClass
from .serializers import YogaClassSerializer


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_yoga_class(where="", day_of_week="", time=""):
        if where != "" and day_of_week != "" and time != "":
            YogaClass.objects.create(
                where=where, day_of_week=day_of_week, time=time)

    def setup(self):
        self.create_song("Big Ben", "Monday", datetime.time(7, 0, 0))
        self.create_song("London Fields", "Tuesday", datetime.time(13, 0, 0))
        self.create_song("Leyton Pause", "Wednesday", datetime.time(22, 30, 0))
        self.create_song("Putney Bridge", "Wednesday", datetime.time(6, 15, 0))
        self.create_song("The O2", "Friday", datetime.time(18, 0, 0))


class GetAllYogaClasses(BaseViewTest):
    def test_get_all_yoga_classes(self):
        response = self.client.get(
            reverse("all-classes")
        )

        expected = YogaClass.objects.all()
        serialized = YogaClassSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
