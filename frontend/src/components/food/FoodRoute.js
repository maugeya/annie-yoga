import React from "react"

import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import FoodSection from "../foodSection/FoodSection"
import useFetch from "../../hooks/useFetch"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"

export default function FoodRoute() {
  const res = useFetch("http://localhost:8000/recipes/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const recipes = res.data
  const isLoading = res.isLoading

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
