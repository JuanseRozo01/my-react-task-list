import './App.css'
import './Components/Style.css'
import {Header} from './Components/Header'
import { TaskList } from './Components/TaskList'
import Input from './Components/Input'
import { useEffect, useState } from 'react'

function App() {
const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <>
      <Header/>
      <Input addTask={addTask}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App