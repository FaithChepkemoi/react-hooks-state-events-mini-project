import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
