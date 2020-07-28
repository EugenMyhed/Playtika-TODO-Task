import React from 'react';
import TaskCreator from './TaskCreator';
import TaskList from './TaskList';
import TasksFilter from './TasksFilter'

import './App.css';

function App() {
  return (
    <div className="App">
      <TaskCreator />
      <TasksFilter />
      <TaskList />
    </div>
  );
}

export default App;
