
import { useState } from "react"
import Button from "./Button"
import "./InputTodo.css"


const InputTodo = ({handleTaskAdd}) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleTaskOnClick = () => {
        if(input.length)
         handleTaskAdd(input)
         setInput('')
        
    }

    return (
        <div className="Container">
            <div className="container-input">
                <input
                    type="text"
                    className="InputTodo"
                    onChange={handleChange}
                    value={input}
                />
                <Button onClick={handleTaskOnClick}>+</Button>

            </div>
        </div>
    )
}

export default InputTodo