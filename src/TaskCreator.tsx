import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from './store/actions'
import { TaskType } from './store/actions'

import './App.css';

type TaskCreatorPropsType = {
    list: Array<TaskType>,
    createTask: (task: TaskType) => void
}

const TaskCreator: React.FC<TaskCreatorPropsType> = ({ createTask, list }) => {
    const [task, setTask] = useState();
    const [taskType, setTaskType] = useState('Work');

    const create = (element: TaskType) => createTask(element)
 
  return (
    <div className="taskCreatorContainer">
        <select 
            onChange={(event) => 
                setTaskType(event.target.value)
            } 
            name="typeTask" 
            id="typeTask"
        >
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Personal">Personal</option>
        </select>
        <input onChange={(event) => 
            setTask({
                text: event.target.value,
                label: taskType,
                isDone: false,
            })
        } type="text"/>
        <button className='createButton' onClick={() => create(task)}>Add Item</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
    list: state.list
}) 

const mapDispatchToProps = {
    createTask: createTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);
