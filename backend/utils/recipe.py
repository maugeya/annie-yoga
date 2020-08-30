def prettify_ingredients_for_serializer(ingredient_obj):
    if ingredient_obj['amount'] and ingredient_obj['unit__name'] and ingredient_obj['ingredient__name']:
        return " ".join([str(ingredient_obj['amount']), ingredient_obj['unit__name'], ingredient_obj['ingredient__name']])
    elif not ingredient_obj['amount'] and not ingredient_obj['unit__name']:
        return ingredient_obj['ingredient__name']
    elif not ingredient_obj['amount'] and ingredient_obj['unit__name']:
        return ", ".join([ingredient_obj['ingredient__name'], ingredient_obj['unit__name']])
    elif not ingredient_obj['unit__name']:
        return " ".join([str(ingredient_obj['amount']), ingredient_obj['ingredient__name']])
