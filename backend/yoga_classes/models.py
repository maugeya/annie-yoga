from django.db import models

MON = 'Monday'
TUES = 'Tuesday'
WED = 'Wednesday'
THURS = 'Thursday'
FRI = 'Friday'
SAT = 'Saturday'
SUN = 'Sunday'

DAYS_OF_WEEK = [
    (MON, 'Monday'),
    (TUES, 'Tuesday'),
    (WED, 'Wednesday'),
    (THURS, 'Thursday'),
    (FRI, 'Friday'),
    (SAT, 'Saturday'),
    (SUN, 'Sunday'),
]


class YogaClass(models.Model):
    where = models.CharField(max_length=200)
    day_of_week = models.CharField(
        max_length=9,
        choices=DAYS_OF_WEEK,
    )
    time = models.TimeField(help_text='Enter in format HH:MM')

    def __str__(self):
        return '%s, %s, %s' % (self.where, self.day_of_week, self.time)
