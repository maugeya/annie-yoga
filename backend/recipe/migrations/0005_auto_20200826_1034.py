# Generated by Django 3.0.8 on 2020-08-26 09:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0004_recipecategory_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipeingredient',
            name='is_optional',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='recipeingredient',
            name='amount',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recipeingredient',
            name='unit',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='recipe.IngredientUnit'),
        ),
    ]
