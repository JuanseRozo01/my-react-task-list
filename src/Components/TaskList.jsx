import { useState } from "react";
import {MdDelete, MdEditSquare} from 'react-icons/md'

function TaskList (props) {
  const [estado, setEstado] = useState('');

  const {tasks, setTasks} = props;

function inputEdit(id, tareas){
  const edicionInput = tasks.map((task)=>{
    if(task.id === id){
      return{
        ...task, tarea: tareas.tarea, editado: false,
      }
    } return task
  });
  localStorage.setItem('tasks', JSON.stringify(edicionInput));
  setTasks(edicionInput);
};

function clearAll(){
  localStorage.clear(tasks);
  setTasks([])
};
  
  function eliminar (id) {
    const eliminar = tasks.filter((tasks) => tasks.id !== id); 
    localStorage.setItem('tasks', JSON.stringify(eliminar))
    setTasks(eliminar);
  };

  function cambio(id){
    const cambio = tasks.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          editado: !tarea.editado,
        };
      }
      return tarea;
    });

  localStorage.setItem('tasks', JSON.stringify(cambio))
  setTasks(cambio)
    return cambio;
  };

  const mapeo = () => {
    return (
      
      <ul className="contenedor-ul">
        {tasks.map((task) => (
          <li className = "barras" task ={task} key={task.id}>
            <input type="checkbox" 
            className="checkbox"
            id={`checkbox-${task.id}`} />
            <label htmlFor={`checkbox-${task.id}`}></label>

            <div>
              {task.editado ? (
                <input type="text" className="input-editado"
                value={estado}
                onKeyDown={(event)=>{
                if(event.key === 'Enter' && (estado.trim() !== '')){
                inputEdit(task.id, {tarea: estado});}}}
                onChange={(event) =>
                setEstado(event.target.value)}/>) : (task.tarea)}
            </div>

            <div className="icons">
              <button
                className="edit"
                onClick={() => cambio(task.id)}
              >
                <MdEditSquare />
              </button>
              <button
                className="garbage"
                onClick={() => eliminar(task.id)}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  return(
   <div >
     <ul className="container">
     {mapeo()}
   <div className="container-clear">
  <button  onClick={clearAll} className="Botton-clear">Clear all</button>
    </div>
    </ul>
  </div>
);
};

export {TaskList};