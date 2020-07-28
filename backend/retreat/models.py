from django.db import models


class RetreatLocation(models.Model):
    name = models.CharField(max_length=200)
    place = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    url = models.URLField()
    is_active = models.BooleanField(default=True)
