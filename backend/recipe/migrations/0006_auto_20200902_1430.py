# Generated by Django 3.0.8 on 2020-09-02 13:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('file', '0001_initial'),
        ('recipe', '0005_auto_20200826_1034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='file.FileOnS3'),
        ),
    ]
