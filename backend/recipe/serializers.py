from rest_framework import serializers

from .models import Recipe
from utils.common import get_presigned_url
from annie_may_rice.settings import AWS_STORAGE_BUCKET_NAME
from utils.recipe import prettify_ingredients_for_serializer


class RecipeSerializer(serializers.ModelSerializer):
    image_s3 = serializers.SerializerMethodField()
    recipe_category = serializers.SerializerMethodField()
    recipe_ingredients = serializers.SerializerMethodField()
    method = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'recipe_ingredients', 'method',
                  'image_s3', 'recipe_category')

    def get_image_s3(self, obj):
        if not obj.image:
            return
        file_name = obj.image.file.name
        return get_presigned_url(AWS_STORAGE_BUCKET_NAME, file_name)

    def get_recipe_category(self, obj):
        file_name = obj.recipe_category.image.file.name
        recipe_category_object = {
            'id': obj.recipe_category.id,
            'name': obj.recipe_category.name,
            's3_url': get_presigned_url(AWS_STORAGE_BUCKET_NAME, file_name)
        }

        if obj.recipe_category.description:
            recipe_category_object['description'] = obj.recipe_category.description

        return recipe_category_object

    def get_recipe_ingredients(self, obj):
        pretty_ingredients_list = []
        all_recipe_ingredients = obj.recipe_ingredient.all(
        ).values('amount', 'unit__name', 'ingredient__name', 'is_optional')

        formatted_ingredients_list = []
        for ingredient in all_recipe_ingredients:
            pretty_ingredients_dict = {'is_optional': ingredient['is_optional'],
                                       'pretty_ingredient': prettify_ingredients_for_serializer(ingredient)}
            formatted_ingredients_list.append(pretty_ingredients_dict)
        return formatted_ingredients_list

    def get_method(self, obj):
        return obj.method.split(": ")
