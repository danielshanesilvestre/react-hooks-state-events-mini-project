import React, { useState } from "react";

function CategoryFilter({ 
  categories,
  filter,
  setFilter
}) {
  let categoryComponentArray = categories.map((category) => {
    function handleClick(event) {
      setFilter(category);
    }

    const className = category == filter ? "selected" : null;

    return (
      <button className={className} key={category} onClick={handleClick}>
        {category}
      </button>
    )
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryComponentArray}
    </div>
  );
}

export default CategoryFilter;
