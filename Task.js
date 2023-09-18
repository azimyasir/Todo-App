import React, { useState } from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div style={{ backgroundColor: task.backgroundColor }}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      ) : (
        <span onClick={handleEdit}>{task.text}</span>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
    </div>
  );
};

export default Task;

