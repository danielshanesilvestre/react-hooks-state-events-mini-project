import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");

  function handleDeleteTask(taskToDelete) {
    setTasks(tasks => {
      return tasks.filter((task) => {
        if (task.text === taskToDelete.text) {
          return false;
        }
        return true;
      });
    });
  }

  function handleTaskFormSubmit(formData) {
    setTasks(tasks => {
      return [
        ...tasks,
        {
          ...formData
        }
      ]
    })
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={filter} setFilter={setFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} filter={filter}/>
    </div>
  );
}

export default App;
