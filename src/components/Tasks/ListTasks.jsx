import React from 'react';
import Task from './Task';

const ListTasks = ({ tasks }) => {
    
    return (
        <ul className="task-list">
            { tasks.map( task => (
                <Task 
                    key={ task.id}
                    task={ task }
                />
            )) }
        </ul>
    );
}

export default ListTasks;