import React, { useState, useEffect } from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"
import ParallaxImage from "../common/parallaxImage/ParallaxImage"
import foodParallax from "../../assets/food-parallax.jpg"
import RecipeCategorySection from "./RecipeCategorySection"
import RecipeCategoryDropdown from "./RecipeCategoryDropdown"

export default function FoodSection({ recipes }) {
  const [filteredCategory, setFilteredCategory] = useState()
  const [selectValue, setSelectValue] = useState("ALL")

  const getAllRecipeCategories = (recipes) => {
    const allRecipeCategories = recipes.map((recipe) => recipe.recipeCategory)
    return [
      ...new Map(allRecipeCategories.map((item) => [item.id, item])).values(),
    ]
  }
  const allCategories = getAllRecipeCategories(recipes)

  const getRecipesForCategory = (categoryId, recipes) => {
    return recipes.filter((recipe) => recipe.recipeCategory.id === categoryId)
  }

  const handleOnChangeDropdown = (e) => {
    setFilteredCategory(
      allCategories.find((c) => c.id.toString() === e.target.value)
    )
    setSelectValue(e.target.value)
  }

  const renderRecipes = () => {
    if (!filteredCategory) {
      return allCategories.map((category, i) => (
        <RecipeCategorySection
          category={category}
          recipesForCategory={getRecipesForCategory(category.id, recipes)}
          key={i}
        />
      ))
    }
    return (
      <RecipeCategorySection
        category={filteredCategory}
        recipesForCategory={getRecipesForCategory(filteredCategory.id, recipes)}
      />
    )
  }

  const handleResetButtonClick = () => {
    setFilteredCategory()
    setSelectValue("ALL")
  }

  return (
    <>
      <Layout>
        <section className="sectionContainer">
          <SectionHeader title="Food Philosophy" />
          <SectionText>
            <p>
              Food has always been central to my existence - as it is to
              everybody's come to think of it. But the kitchen table will
              forever be the focus of my house and eating good food with good
              people is my happy place.
            </p>
            <p>
              I love homemade food and making things from scratch, which helps
              things to be healthier too. My background in health journalism has
              involved writing many recipes for active bodies so here I shall
              combine the two and share the tastiest things I rustle up in my
              kitchen. There will be lots of veg, lots of flavour and very few
              precise measurements. Sorry.
            </p>
          </SectionText>
        </section>
      </Layout>
      <ParallaxImage image={foodParallax} />
      <Layout>
        <section className="sectionContainer">
          <SectionHeader title="Recipes" />
          <SectionText>
            <RecipeCategoryDropdown
              allCategories={allCategories}
              filteredCategory={filteredCategory}
              onChange={handleOnChangeDropdown}
              onResetClick={handleResetButtonClick}
              value={selectValue}
            />
            {renderRecipes()}
          </SectionText>
        </section>
      </Layout>
    </>
  )
}
