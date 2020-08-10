from rest_framework import serializers

from .models import Retreat, RetreatLocation
from utils.time import start_month_and_end_month_are_equal, start_year_and_end_year_are_equal


class RetreatLocationSerializer(serializers.ModelSerializer):
    s3_url = serializers.SerializerMethodField()

    class Meta:
        model = RetreatLocation
        fields = ('s3_url', 'country', 'name', 'place', 'url', 'id')

    def get_s3_url(self, obj):
        return "https://annie-may-rice-yoga.s3-eu-west-1.amazonaws.com/" + obj.image.file.name


class RetreatSerializer(serializers.ModelSerializer):
    retreat_location = RetreatLocationSerializer(read_only=True)
    pretty_dates = serializers.SerializerMethodField()

    class Meta:
        model = Retreat
        fields = ('pretty_dates', 'retreat_location')

    def get_pretty_dates(self, obj):
        retreat_start_date = obj.start_date
        retreat_end_date = obj.end_date
        if start_month_and_end_month_are_equal(start_date=retreat_start_date, end_date=retreat_end_date) and start_year_and_end_year_are_equal(start_date=retreat_start_date, end_date=retreat_end_date):
            return "{start_day} - {end_day} {month} {year}"\
                .format(
                    start_day=obj.start_date.strftime("%d"),
                    end_day=obj.end_date.strftime("%d"),
                    month=obj.start_date.strftime("%B"),
                    year=obj.start_date.strftime("%Y")
                )
        elif not start_month_and_end_month_are_equal(start_date=retreat_start_date, end_date=retreat_end_date) and not start_year_and_end_year_are_equal(start_date=retreat_start_date, end_date=retreat_end_date):
            return "{start_day} {start_month} {start_year} - {end_day} {end_month} {end_year}"\
                .format(
                    start_day=obj.start_date.strftime("%d"),
                    start_month=obj.start_date.strftime("%B"),
                    start_year=obj.start_date.strftime("%Y"),
                    end_day=obj.end_date.strftime("%d"),
                    end_month=obj.end_date.strftime("%B"),
                    end_year=obj.end_date.strftime("%Y")
                )
        elif not start_month_and_end_month_are_equal(start_date=retreat_start_date, end_date=retreat_end_date):
            return "{start_day} {start_month} - {end_day} {end_month} {year}"\
                .format(
                    start_day=obj.start_date.strftime("%d"),
                    start_month=obj.start_date.strftime("%B"),
                    end_day=obj.end_date.strftime("%d"),
                    end_month=obj.end_date.strftime("%B"),
                    year=obj.start_date.strftime("%Y")
                )
