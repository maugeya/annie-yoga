# Generated by Django 3.0.8 on 2020-09-02 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0008_auto_20200902_1444'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='serving_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
