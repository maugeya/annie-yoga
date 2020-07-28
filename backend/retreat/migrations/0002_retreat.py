# Generated by Django 3.0.8 on 2020-07-28 18:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('retreat', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Retreat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('retreat_location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='retreat.RetreatLocation')),
            ],
        ),
    ]