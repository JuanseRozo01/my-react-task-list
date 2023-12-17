import useFunctions from "../hooks/useFunctions";
import { Context } from './Context';

function ContextProvider({children}){

    const {
        tasks,
        newTask, 
        setNewTask,
        updateLocalStorage,
        description, 
        setDescription,
        deleteTask,
        updateTask,
        agregarTarea,
        clearAll,
        cambio
    } = useFunctions();

    return(
        <div>
        <Context.Provider value={{
        tasks,
        newTask,
        setNewTask,
        updateLocalStorage,
        description, 
        setDescription,
        deleteTask,
        updateTask,
        agregarTarea,
        clearAll,
        cambio
        }}>  {children}  </Context.Provider>
        </div>
    )
}

export default ContextProvider;