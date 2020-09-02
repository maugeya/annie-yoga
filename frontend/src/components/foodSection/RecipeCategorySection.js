import React from "react"
import { Link } from "react-router-dom"

import styles from "./RecipeCategorySection.module.css"

export default function RecipeCategorySection({
  category,
  recipesForCategory,
}) {
  return (
    <div className={styles.container}>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <ul>
        {recipesForCategory.map((recipe, i) => (
          <li key={i}>
            <Link to={`/food/${recipe.id}`} className="inlineLink">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
