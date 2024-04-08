import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ task, onDelete, onToggle, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  function handleDelete() {
    onDelete(task.id);
  }

  function handleToggle() {
    onToggle(task.id);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleUpdate() {
    onUpdate(task.id, editedText, editedPriority);
    setEditMode(false);
  }

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(parseInt(e.target.value))}
          >
            {[...Array(23).keys()].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <span className="priority">Quantity: {task.priority}</span>
        </>
      )}
      <div className="btn-group">
        {editMode ? (
          <button className="update-btn" onClick={handleUpdate}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        ) : (
          <>
            <button className="edit-btn" onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="check-btn" onClick={handleToggle}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
