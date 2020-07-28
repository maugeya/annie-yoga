from django.db import models


class RetreatLocation(models.Model):
    name = models.CharField(max_length=200)
    place = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    url = models.URLField()
    is_active = models.BooleanField(default=True)


class Retreat(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    retreat_location = models.ForeignKey(
        RetreatLocation, on_delete=models.CASCADE)
