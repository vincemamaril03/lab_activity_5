import React, { useState } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onDelete, onToggle, onUpdate }) {
  const [sortBy, setSortBy] = useState("all"); // State to track sorting option

  // Function to filter tasks based on the selected sorting option
  const filteredTasks = () => {
    if (sortBy === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (sortBy === "incomplete") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  // Function to generate todo items based on filtered tasks
  const generateTodoItems = () => {
    const todoItems = [];

    filteredTasks().forEach((task) => {
      todoItems.push(
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
          inputName={task.id}
          priority={task.priority}
        />
      );
    });

    return todoItems;
  };

  return (
    <div>
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort By: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul className="todo-list">{generateTodoItems()}</ul>
    </div>
  );
}

export default TodoList;
