import React from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"
import ParallaxImage from "../common/parallaxImage/ParallaxImage"
import foodParallax from "../../assets/food-parallax.jpg"

export default function FoodSection({ recipes }) {
  const getAllRecipeCategories = (recipes) => {
    // console.log(recipes)
  }
  getAllRecipeCategories(recipes)

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
            <p>HEYO</p>
          </SectionText>
        </section>
      </Layout>
    </>
  )
}
