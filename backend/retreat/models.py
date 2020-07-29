from django.db import models


class RetreatLocation(models.Model):
    name = models.CharField(max_length=200)
    place = models.CharField(max_length=200)
    country = models.CharField(max_length=100, blank=True)
    url = models.URLField()
    is_active = models.BooleanField(default=True)

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
