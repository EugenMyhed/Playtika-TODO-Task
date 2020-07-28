import React from 'react';
import { connect } from 'react-redux';
import { setFilterType } from './store/actions'

import './App.css';

type TasksFilterPropsType = {
    setFilterType: (type: string) => void
}
const FILTER_ITEMS = [ 'Work', 'Family', 'Personal'];

const TasksFilter: React.FC<TasksFilterPropsType> = ({ setFilterType }) => {
 
  return (
    <div className="TasksFilterContainer">
        {
            FILTER_ITEMS.map(el => (
                <button className='createButton' onClick={() => setFilterType(el)} key={el}>{el}</button>
            ))
        }
        <button onClick={() => setFilterType('')}>reset</button>
    </div>
  );
};

const mapDispatchToProps = {
    setFilterType
}

export default connect(null, mapDispatchToProps)(TasksFilter);