import { useState } from "react";

function input ({addTask}) {
    const [newTask, setNewTask] = useState('');

    const agregarTarea = () => {
        if(newTask.trim() !== ''){
            addTask({
                id: String(Date.now()),
                tarea: newTask,
                editado: false,
            });
            setNewTask('')
        }
    }
    return(
        <div className="add">
        <input type="text"  placeholder="add new Task" className="input"
        value={newTask}
        onKeyDown={(event) => {if(event.key === 'Enter'){agregarTarea()}} } 
        onChange={(e)=> setNewTask(e.target.value)}/> 
        <button onClick={agregarTarea}className="añadir">+</button>
        </div>
    )
};

export default input;