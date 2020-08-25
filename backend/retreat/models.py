import os
from django.db import models
from django.core.validators import MinValueValidator
from django.core.exceptions import ObjectDoesNotExist

from file.models import FileOnS3


class RetreatLocation(models.Model):
    name = models.CharField(max_length=200)
    place = models.CharField(max_length=200)
    country = models.CharField(max_length=100, blank=True)
    url = models.URLField()
    card_pic_image = models.ForeignKey(
        FileOnS3, on_delete=models.CASCADE, null=True, related_name='card_pic_image')
    is_active = models.BooleanField(default=True)
    subtitle = models.CharField(max_length=100)
    description = models.TextField()
    testimonial_1 = models.TextField()
    testimonial_2 = models.TextField()
    retreat_main_image = models.ForeignKey(
        FileOnS3, on_delete=models.CASCADE, related_name='retreat_main_image')
    retreat_image_gallery = models.ManyToManyField(
        FileOnS3, related_name='image_gallery')
    cost = models.DecimalField(max_digits=5, decimal_places=2, validators=[
                               MinValueValidator(0.01)])
    cost_includes = models.TextField()
    cost_excludes = models.TextField(blank=True, null=True)
    daily_schedule = models.TextField()
    optional_extras = models.TextField(blank=True, null=True)

    def __str__(self):
        return "{name}, {place}, {country}".format(name=self.name, place=self.place, country=self.country)


class Retreat(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    retreat_location = models.ForeignKey(
        RetreatLocation, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "{retreat_location_name} , {start_date} - {end_date}"\
            .format(
                retreat_location_name=self.retreat_location.name,
                start_date=self.start_date,
                end_date=self.end_date
            )
