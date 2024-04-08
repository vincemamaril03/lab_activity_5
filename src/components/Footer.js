import React from "react";
import "./styles.css";

function Footer({ tasks }) {
  // Calculate the total number of tasks
  const totalTasks = tasks.length;

  // Calculate the number of completed tasks
  const completedTasks = tasks.filter((task) => task.completed).length;

  // Calculate the percentage of completed tasks
  const percentageCompleted =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="footer">
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      <p>Percentage completed: {percentageCompleted.toFixed(2)}%</p>
    </div>
  );
}

export default Footer;
