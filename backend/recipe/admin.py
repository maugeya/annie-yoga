from django.contrib import admin
from .models import (Recipe, RecipeIngredient, Ingredient,
                     IngredientUnit, RecipeCategory)


class RecipeAdmin(admin.ModelAdmin):
    model = Recipe
    list_display = ('title', 'recipe_category')
    list_filter = ('recipe_category', )
    filter_horizontal = ('recipe_ingredient',)


admin.site.register(RecipeIngredient)
admin.site.register(Ingredient)
admin.site.register(IngredientUnit)
admin.site.register(RecipeCategory)
admin.site.register(Recipe, RecipeAdmin)
