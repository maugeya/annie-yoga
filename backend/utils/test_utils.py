import datetime
import random


def create_random_date():
    start_date = datetime.date(2020, 1, 1)
    end_date = datetime.date(2030, 2, 1)
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)

    return start_date + datetime.timedelta(days=random_number_of_days)


def add_week_to_date(start_date):
    return start_date + datetime.timedelta(days=7)
