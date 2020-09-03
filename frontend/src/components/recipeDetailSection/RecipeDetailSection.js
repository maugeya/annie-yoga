import React from "react"

import styles from "./RecipeDetailSection.module.css"
import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function RecipeDetailSection({ recipe }) {
  const renderRecipeIntro = (recipe) => {
    const { recipeIntro } = recipe
    return recipeIntro.map((line) => <p>{line}</p>)
  }

  return (
    <Layout>
      <section className={styles.recipeIntroSection}>
        <div className={styles.recipeIntro}>{renderRecipeIntro(recipe)}</div>
      </section>
      <section className="sectionContainer">
        <SectionHeader title="You will need" />
        <SectionText>
          <p>INGREDIENTS HERE</p>
        </SectionText>
      </section>
    </Layout>
  )
}
