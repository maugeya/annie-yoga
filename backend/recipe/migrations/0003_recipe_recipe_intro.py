# Generated by Django 3.0.8 on 2020-08-26 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0002_auto_20200826_0943'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='recipe_intro',
            field=models.TextField(blank=True),
        ),
    ]
