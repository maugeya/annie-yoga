from django.db import models

from file.models import FileOnS3


class RecipeCategory(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ForeignKey(FileOnS3, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class IngredientUnit(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class RecipeIngredient(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.DecimalField(
        blank=True, null=True, max_digits=5, decimal_places=2)
    unit = models.ForeignKey(
        IngredientUnit, on_delete=models.CASCADE, blank=True, null=True)
    is_optional = models.BooleanField(default=False)

    def __str__(self):
        return "{ingredient}, {amount}, {unit}, {is_optional}".format(ingredient=self.ingredient, amount=self.amount, unit=self.unit, is_optional=self.is_optional)


class Recipe(models.Model):
    recipe_intro = models.TextField(blank=True)
    title = models.CharField(max_length=500)
    recipe_ingredient = models.ManyToManyField(
        RecipeIngredient, related_name="recipe")
    method = models.TextField()
    image = models.ForeignKey(
        FileOnS3, on_delete=models.CASCADE, blank=True, null=True)
    recipe_category = models.ForeignKey(
        RecipeCategory, on_delete=models.CASCADE)
    serving_amount = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return self.title
