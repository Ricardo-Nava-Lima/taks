import React from 'react'

const Task = ({ task, dispatch }) => {

    const handleClick = (id) => {
        
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })    
    }

    const hanldeComplete = (id) => {
        
        dispatch({
            type: 'COMPLETE_TASK',
            payload: id
        })
    }

    return (
        <li 
            className={`task-item ${ task.done && 'task-item--complete'}`}
            onClick={ () => hanldeComplete(task.id) }
            id="task-item"
        >
            { task.task }
            <button 
                className="delete"
                onClick={ () => handleClick(task.id) }
            >Borrar</button>
        </li>
    );
}

export default Task;