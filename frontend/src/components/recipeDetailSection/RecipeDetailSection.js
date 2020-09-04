import React from "react"

import styles from "./RecipeDetailSection.module.css"
import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function RecipeDetailSection({ recipe }) {
  const { recipeIntro, method, recipeIngredients } = recipe

  const renderRecipeIntro = () => {
    return recipeIntro.map((line, i) => <p key={i}>{line}</p>)
  }

  const renderIngredientsList = () => {
    return recipeIngredients.map((ingredient, i) => (
      <li key={i}>
        <p>
          {ingredient.prettyIngredient}{" "}
          {ingredient.isOptional && (
            <span className={styles.ingredientOptional}>(optional)</span>
          )}
        </p>
      </li>
    ))
  }

  const renderMethodList = () => {
    return method.map((step, i) => (
      <li key={i}>
        <p>{step}</p>
      </li>
    ))
  }

  return (
    <Layout>
      <section className={styles.recipeIntroSection}>
        <div className={styles.recipeIntro}>{renderRecipeIntro()}</div>
      </section>
      <section className={`sectionContainer ${styles.recipeIngredientSection}`}>
        <SectionHeader title="You will need" />
        <SectionText>
          <ul>{renderIngredientsList()}</ul>
        </SectionText>
      </section>
      <section className="sectionContainer">
        <SectionHeader title="Make it" />
        <SectionText>
          <ol>{renderMethodList()}</ol>
        </SectionText>
      </section>
    </Layout>
  )
}
