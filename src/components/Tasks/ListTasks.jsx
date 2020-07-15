import React from 'react';
import Task from './Task';

const ListTasks = ({ tasks, dispatch }) => {
    
    return (
        <ul className="task-list">
            { tasks.map( task => (
                <Task 
                    key={ task.id}
                    task={ task }
                    dispatch={ dispatch }
                />
            )) }
        </ul>
    );
}

export default ListTasks;