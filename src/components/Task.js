import React from 'react';

const Task = ({ task, onDelete }) => {
  if (!task) {
    return null; // Handle cases where task is undefined
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default Task;
