import React from 'react';
import Task from './Task';

const ListTasks = ({ tasks }) => {
    console.log(tasks)
    return (
        <>
            { tasks.map( task => (
                <Task 
                    key={ task.id}
                    task={ task }
                />
            )) }
        </>
    );
}

export default ListTasks;