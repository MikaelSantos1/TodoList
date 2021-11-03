import React from "react";
import "./Task.css"
import{BsTrash} from 'react-icons/bs/'

const Task = ({ task, handeCompletedTask,handleRemoveTask }) => {
    return (

        <div className="taskContainer" >
            <div className='button-container'>
            <button 
            onClick={()=>handeCompletedTask(task.id)}
            className={task.done?' btncheck-done':'btncheck'}></button>
            </div>
            
            <h2 className={task.done?' task-completed':''}>{task.title}</h2> 
            <div className='button-container-remove'>
                <button className='btn-remove' onClick={()=>handleRemoveTask(task.id)}>
                 <BsTrash/>
                </button>
                
            </div>
        </div>

    )
}

export default Task