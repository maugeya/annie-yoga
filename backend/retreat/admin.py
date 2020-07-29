from django.contrib import admin
from .models import Retreat, RetreatLocation


class RetreatLocationAdmin(admin.ModelAdmin):
    model = RetreatLocation
    list_display = ('name', 'is_active')


class RetreatAdmin(admin.ModelAdmin):
    model = Retreat
    list_display = ('start_date', 'end_date', 'is_active')
    ordering = ('start_date',)


admin.site.register(Retreat, RetreatAdmin)
admin.site.register(RetreatLocation, RetreatLocationAdmin)
