# Generated by Django 3.0.8 on 2020-07-25 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yoga_classes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='yogaclass',
            name='time',
            field=models.TimeField(help_text='Enter in format HH:MM'),
        ),
    ]
