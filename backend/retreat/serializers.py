from rest_framework import serializers

from .models import Retreat, RetreatLocation
from utils.time import start_month_and_end_month_are_equal, start_year_and_end_year_are_equal
from utils.common import get_s3_url, get_presigned_url
from annie_may_rice.settings import AWS_STORAGE_BUCKET_NAME


class RetreatLocationSerializer(serializers.ModelSerializer):
    card_image_s3_url = serializers.SerializerMethodField()
    retreat_main_image_s3_url = serializers.SerializerMethodField()
    retreat_gallery_s3_urls = serializers.SerializerMethodField()

    class Meta:
        model = RetreatLocation
        fields = ('id', 'place', 'country', 'name', 'url', 'card_image_s3_url', 'description', 'subtitle', 'testimonial_1', 'testimonial_2', 'cost', 'cost_includes',
                  'cost_excludes', 'retreat_main_image_s3_url', 'retreat_gallery_s3_urls', 'daily_schedule', 'optional_extras')

    def get_card_image_s3_url(self, obj):
        file_name = obj.card_pic_image.file.name
        return get_presigned_url(AWS_STORAGE_BUCKET_NAME, file_name)

    def get_retreat_main_image_s3_url(self, obj):
        file_name = obj.retreat_main_image.file.name
        return get_presigned_url(AWS_STORAGE_BUCKET_NAME, file_name)

    def get_retreat_gallery_s3_urls(self, obj):
        image_gallery_instances = obj.retreat_image_gallery.all()
        return [get_presigned_url(AWS_STORAGE_BUCKET_NAME, image.file.name)
                for image in image_gallery_instances]


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
