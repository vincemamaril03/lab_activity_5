import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  function addTask(newTask, priority) {
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false, priority: priority },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function updateTask(id, newText, newPriority) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText, priority: newPriority };
        }
        return task;
      })
    );
  }

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onUpdate={updateTask}
      />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
