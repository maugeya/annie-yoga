from rest_framework import serializers

from .models import Recipe
from utils.common import get_presigned_url
from annie_may_rice.settings import AWS_STORAGE_BUCKET_NAME


class RecipeSerializer(serializers.ModelSerializer):
    image_s3 = serializers.SerializerMethodField()
    recipe_category = serializers.SerializerMethodField()
    recipe_ingredients = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'recipe_ingredients', 'method',
                  'image_s3', 'recipe_category')

    def get_image_s3(self, obj):
        file_name = obj.image.file.name
        return get_presigned_url(AWS_STORAGE_BUCKET_NAME, file_name)

    def get_recipe_category(self, obj):
        recipe_category_object = {
            'id': obj.recipe_category.id,
            'name': obj.recipe_category.name,
        }

        if obj.recipe_category.description:
            recipe_category_object['desciption'] = obj.recipe_category.description

        return recipe_category_object

    def get_recipe_ingredients(self, obj):
        pretty_ingredients_list = []
        all_recipe_ingredients = obj.recipe_ingredient.all()

        for recipe_ingredient in all_recipe_ingredients:
            # Need to allow for optional ingredients as well :(
            if recipe_ingredient.ingredient and recipe_ingredient.unit and recipe_ingredient.amount:
                pretty_ingredient = str(recipe_ingredient.amount) + ' ' + \
                    recipe_ingredient.unit.name + ' ' + recipe_ingredient.ingredient.name
            elif not recipe_ingredient.amount and not recipe_ingredient.unit:
                pretty_ingredient = recipe_ingredient.ingredient.name
            elif recipe_ingredient.ingredient and recipe_ingredient.unit and not recipe_ingredient.amount:
                pretty_ingredient = recipe_ingredient.ingredient.name + \
                    ', ' + recipe_ingredient.unit.name
            elif recipe_ingredient.ingredient and recipe_ingredient.amount and not recipe_ingredient.unit:
                pretty_ingredient = str(recipe_ingredient.amount) + \
                    ' ' + recipe_ingredient.ingredient.name

            pretty_ingredients_list.append(pretty_ingredient)

        return pretty_ingredients_list
