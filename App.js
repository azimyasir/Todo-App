In App.js, import and render the TaskList component:

// App.js

import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TaskList />
    </div>
  );
}

export default App;
