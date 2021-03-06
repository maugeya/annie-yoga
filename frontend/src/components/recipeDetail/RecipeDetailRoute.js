import React from "react"
import RecipeDetailSection from "../recipeDetailSection/RecipeDetailSection"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"

export default function RecipeDetailRoute({ recipe }) {
  return (
    <div>
      <JumboImageContainer
        headerTitle={recipe.title}
        centerTextOverlay
        imageUrl={recipe.imageS3 ? recipe.imageS3 : recipe.recipeCategory.s3Url}
      />
      <RecipeDetailSection recipe={recipe} />
    </div>
  )
}
