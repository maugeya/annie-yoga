import React from "react"

import Layout from "../layout/Layout"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import FoodSection from "../foodSection/FoodSection"
import useFetch from "../../hooks/useFetch"

export default function FoodRoute() {
  const res = useFetch("http://localhost:8000/recipes/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const recipes = res.data
  const isLoading = res.isLoading
  console.log("recipes", recipes)
  return (
    <div>
      <JumboImageContainer
        headerTitle="Food"
        headerSubTitle="Living for the kitchen table"
        centerTextOverlay
        imageUrl={require("../../assets/food-main.jpg")}
      />
      <FoodSection />
    </div>
  )
}
