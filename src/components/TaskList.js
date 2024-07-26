import React from "react";

import Task from "./Task";

function TaskList({
  tasks,
  onDeleteTask,
  filter = "All"
}) {
  const taskComponentArray = tasks
    .filter(task => {
      if (filter === "All" || filter === task.category) return true;
      return false;
    })
    .map(task => {
      let onDelete = () => {
        onDeleteTask(task);
      };

      return (
        <Task key={task.text} category={task.category} text={task.text} onDelete={onDelete}/>
      )
    });

  return (
    <div className="tasks">
      {taskComponentArray}
    </div>
  );
}

export default TaskList;
