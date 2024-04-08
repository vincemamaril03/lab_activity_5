import React, { useState } from "react";
import "./styles.css";

function TodoForm({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState(0); // Start priority from 0
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTask = newTask.trim();
    if (trimmedTask !== "") {
      addTask(trimmedTask, priority); // Pass both task and priority to the addTask function
      setNewTask("");
      setPriority(0); // Reset priority after adding task
      setErrorMessage("");
    } else {
      setErrorMessage("Empty Field is not allowed!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
            setErrorMessage("");
          }}
          className="task-input"
        />
        <select
          value={priority}
          onChange={(event) => setPriority(parseInt(event.target.value))}
          className="priority-input"
        >
          {[...Array(23).keys()].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default TodoForm;
