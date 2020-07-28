import React from 'react';
import { connect } from 'react-redux';
import { createTask } from './store/actions'
import { TaskType } from './store/actions'
import TaskItem from './TaskItem'

import './App.css';

type TaskListPropsType = {
    list: Array<TaskType>,
    filterType: string
}

const TaskList: React.FC<TaskListPropsType> = ({ list, filterType }) => {
    const doneTasks = list.filter(task => task.isDone === true);
    const otherTasks = list.filter(task => task.isDone !== true);
    const tasksList = [...otherTasks, ...doneTasks];
    const result = filterType ? tasksList.filter(tasks => tasks.label !== filterType) : tasksList;
 
  return (
    <div className="App">
        {
            result.map(({ text, label, isDone }) => (
                <TaskItem text={text} label={label} isDone={isDone} key={text}/>
            ))
        }
       
    </div>
  );
};

const mapStateToProps = (state: any) => ({
    list: state.list,
    filterType: state.filterType,
}) 

const mapDispatchToProps = {
    createTask: createTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
