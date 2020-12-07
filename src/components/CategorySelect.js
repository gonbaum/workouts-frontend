import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  selectCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

const CategorySelect = ({ selectCategory, categories }) => {
  return (
    <div id="categorySelect">
      <b>Choose a category:</b>
      <select
        name="Category"
        id="categorySelect"
        className="select"
        onChange={(e) => selectCategory(e)}
      >
        {categories.map((category, i) => (
          <option key={i} value={category}>
            {category}
          </option>
        ))}
      </select>

    </div>
  )
}

CategorySelect.propTypes = propTypes

export default CategorySelect
