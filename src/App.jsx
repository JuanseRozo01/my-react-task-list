import './App.css'
import './Components/Style.css'
import { Header } from './Components/Header'
import { TaskList } from './Components/TaskList'
import Input from './Components/Input'
import ContextProvider from './hooks/ContextProvider'

function App() {

  return (
      <ContextProvider>
    <>
      <Header/>
      <Input />
      <TaskList />
    </>
    </ContextProvider>
  )
  }

export default App