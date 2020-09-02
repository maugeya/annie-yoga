import React from "react"
import { Link } from "react-router-dom"

import styles from "./RecipeCategorySection.module.css"
import SectionDivider from "../common/sectionDivider/SectionDivider"

export default function RecipeCategorySection({
  category,
  recipesForCategory,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.recipeCategoryHeader}>
        <div className={styles.recipeCategoryName}>
          <h3>{category.name}</h3>
        </div>
        <div className={styles.imageContainer}>
          <img src={category.s3Url} />
        </div>
        <div className={styles.recipeCategoryDecription}>
          <p>{category.description}</p>
        </div>
      </div>
      <ul className={styles.recipesList}>
        {recipesForCategory.map((recipe, i) => (
          <li key={i}>
            <Link to={`/food/${recipe.id}`} className="inlineLink">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
      <SectionDivider />
    </div>
  )
}
