from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
import datetime

from .models import RetreatLocation, Retreat
from .serializers import RetreatSerializer
from utils.test_utils import create_random_date, add_week_to_date


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_retreat_location(name="", place="", country="", url="", is_active=False):
        if name != "" and place != "" and url != "" and is_active != False:
            RetreatLocation.objects.create(
                name=name,
                place=place,
                country=country,
                url=url,
                is_active=True
            )

    @staticmethod
    def create_retreat(start_date="", end_date="", retreat_location=""):
        if start_date != "" and end_date != "" and retreat_location != "":
            Retreat.objects.create(
                start_date=start_date, end_date=end_date, retreatLocation=retreatLocation)

    def setup(self):
        lovely_retreat = self.create_retreat_location(
            name="Lovely Retreat", place="Hever Castle", country="", url="http://hever-castle.com", is_active=True)
        piza_yoga = self.create_retreat_location(
            name="Chill Times", place="The Tower of Piza", country="Italy", url="http://yogaonthepiza.com", is_active=True)

        retreat_1_start_date = create_random_date()
        retreat_1_end_date = add_week_to_date(retreat_1_start_date)

        retreat_2_start_date = create_random_date()
        retreat_2_end_date = add_week_to_date(retreat_2_start_date)

        retreat_3_start_date = create_random_date()
        retreat_3_end_date = add_week_to_date(retreat_3_start_date)

        retreat_1 = create_retreat(start_date=retreat_1_start_date,
                                   end_date=retreat_1_end_date, retreat_location=lovely_retreat)
        retreat_2 = create_retreat(start_date=retreat_2_start_date,
                                   end_date=retreat_2_end_date, retreat_location=lovely_retreat)
        retreat_3 = create_retreat(start_date=retreat_3_start_date,
                                   end_date=retreat_3_end_date, retreat_location=piza_yoga)


class GetAllRetreats(BaseViewTest):
    def test_get_all_retreats(self):
        response = self.client.get(reverse("all-retreats"))

        expected = Retreat.objects.all()
        serialized = RetreatSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
