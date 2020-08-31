import React from "react"

import styles from "./RecipeCategoryDropdown.module.css"

export default function RecipeCategoryDropdown({
  allCategories,
  filteredCategory,
  onChange,
  onResetClick,
  value,
}) {
  const renderCategoryOptions = () => {
    return (
      <>
        <option disabled value="ALL">
          --Select a category--
        </option>
        {allCategories.map((category, i) => {
          return (
            <option key={i} value={category.id}>
              {category.name}
            </option>
          )
        })}
      </>
    )
  }

  const renderResetButton = () => {
    if (!filteredCategory) {
      return
    }
    return (
      <div className={styles.resetButtonContainer}>
        <button
          className={styles.resetButton}
          type="button"
          onClick={onResetClick}
        >
          Reset category
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <select
        className={styles.dropDownSelect}
        onChange={onChange}
        value={value}
      >
        {renderCategoryOptions()}
      </select>
      {renderResetButton()}
    </div>
  )
}
