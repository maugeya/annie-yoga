import React, { useState } from "react"

export default function RecipeCategoryDropdown({
  allCategories,
  onChange,
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

  return (
    <select onChange={onChange} value={value}>
      {renderCategoryOptions()}
    </select>
  )
}
