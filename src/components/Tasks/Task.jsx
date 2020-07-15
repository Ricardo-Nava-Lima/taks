import React from 'react'

const Task = ({ task }) => {
    return (
        <>
            <li className="task-item">
                { task.task }
                <button className="delete">Borrar</button>
            </li>
        </>
    );
}

export default Task;