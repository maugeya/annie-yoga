import React from "react"

import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import FoodSection from "../foodSection/FoodSection"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"

export default function FoodRoute({ recipes, isLoading }) {
  return (
    <div>
      <JumboImageContainer
        headerTitle="Food"
        headerSubTitle="Living for the kitchen table"
        centerTextOverlay
        imageUrl={require("../../assets/food-main.jpg")}
      />
      {isLoading && <LoadingSpinner />}
      <FoodSection recipes={recipes} />
    </div>
  )
}
