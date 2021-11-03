import React from "react"
import Task from "./Task"
import './TaskItens.css'
const TaskItens = ({ tasks,handeCompletedTask,handleRemoveTask }) => {
    return (      
     <div className='TaskItens-Container'>
            {tasks.map((task,i) => (
                <div  key={i}>
                     <Task task={task} 
                     handeCompletedTask={handeCompletedTask} 
                     handleRemoveTask={handleRemoveTask} />
                </div>
                
            ))}
            </div>
    
       
)
}

export default TaskItens