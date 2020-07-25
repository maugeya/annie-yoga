from django.contrib import admin
from .models import YogaClass


class YogaClassAdmin(admin.ModelAdmin):
    pass
    list_display = (
        'where',
        'day_of_week',
        'time',
    )


admin.site.register(YogaClass, YogaClassAdmin)
