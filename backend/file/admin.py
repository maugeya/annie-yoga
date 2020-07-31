from django.contrib import admin
from .models import FileOnS3


class FileOnS3Admin(admin.ModelAdmin):
    model = FileOnS3
    list_display = ('title', 'file')
    ordering = ('title',)


admin.site.register(FileOnS3, FileOnS3Admin)
