
import './App.css';
import Header from '../components/Layout/Header';
import InputTodo from "../components/InputTodo"
import PageTittle from '../components/Layout/PageTitle';
import TaskItens from '../components/TaskItens';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const App = props => {



  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const LocalData = localStorage.getItem('todoList')
    if (LocalData)
      setTasks(JSON.parse(LocalData))
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(tasks))
  }, [tasks])


  const handleTaskAdd = (taskTitlle) => {
    const newTask = [...tasks, {
      title: taskTitlle,
      id: uuidv4(),
      done: false,
    }]
    setTasks(newTask)
  }

  const handeCompletedTask = (taskId) => {
    const newTask = tasks.map(task => {

      if (task.id === taskId) return { ...task, done: !task.done }
      return task
    })
    setTasks(newTask)
  }

  const handleRemoveTask = (taskId) => {
    const newTask = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(newTask)
  }


  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="App">
        <PageTittle title='Todo App' />
        <InputTodo handleTaskAdd={handleTaskAdd} />
        <TaskItens tasks={tasks}
          handeCompletedTask={handeCompletedTask}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </>
  )
}


export default App;
