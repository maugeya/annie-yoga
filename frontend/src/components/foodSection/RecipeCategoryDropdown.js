import React, { useState } from "react"

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
      <button type="button" onClick={onResetClick}>
        Reset category
      </button>
    )
  }

  return (
    <div>
      <select onChange={onChange} value={value}>
        {renderCategoryOptions()}
      </select>
      {renderResetButton()}
    </div>
  )
}
