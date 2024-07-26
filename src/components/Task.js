import React from "react";

function Task({
  category,
  text,
  onDelete
}) {
  function handleClickDelete(event) {
    onDelete();
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClickDelete}>X</button>
    </div>
  );
}

export default Task;
