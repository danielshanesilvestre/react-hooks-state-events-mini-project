import React, { useState } from "react";

function NewTaskForm({
  categories,
  onTaskFormSubmit,
}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function handleChange(event) {
    setFormData(formData => {
      console.log(event.target.name);

      return {
        ...formData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    onTaskFormSubmit(formData);
  }

  let categoryOptionArray = categories.map(category => {
    if (category == "All")
      return null;
    return (
      <option key={category}>{category}</option>
    );
  });

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {categoryOptionArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
