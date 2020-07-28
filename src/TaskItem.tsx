import React from 'react';
import './App.css';


import './App.css';

type TaskItemPropsType = {
    text: string, 
    label: string,
    isDone: boolean,
}

const TaskItem: React.FC<TaskItemPropsType> = ({ text, label, isDone }) => {
 
  return (
    <div className="listItem">
        <input type="checkbox" checked={isDone} />
        <p>{text}</p>
        <label className='label'  >{label}</label>
    </div>
  );
};

export default TaskItem;
