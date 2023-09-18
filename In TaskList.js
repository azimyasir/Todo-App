// TaskList.js

import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const task = {
      id: Date.now(),
      text: newTask,
      backgroundColor: randomColor,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const handleUpdateTask = (taskId, updatedText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: updatedText } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
