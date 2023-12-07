import { useContext, useState } from "react";
import {MdDelete, MdEditSquare} from 'react-icons/md'
import { Context } from "../hooks/Context";

function TaskList () {
  
  const [estado, setEstado] = useState('');
  const [description, setDescription] = useState('');
  
  const { tasks, deleteTask,
    updateTask,clearAll,
    cambio } = useContext(Context);

  const mapeo = () => {
     
    return (
      <ul className="contenedor-ul">
        {tasks?.map((task) => (
          <li className = "barras" task ={task} key={task.id}>
            <input type="checkbox" 
            className="checkbox"
            id={`checkbox-${task.id}`} />
            <label htmlFor={`checkbox-${task.id}`}></label>

            <div className="input-edit">
            {task.editado ? (
                <input type="text" className="input-editado"
                value={estado}
                onKeyDown={(event)=>{
                if(event.key === 'Enter' && (estado.trim() !== '')){
                updateTask(task.id, {tarea: estado, description:description});}}}
                onChange={(event) =>
                setEstado(event.target.value)}/>) : <div className="editar-input">{task.tarea}</div>}
    
              {task.editado ? (
                <input type="text" className="input-editado"
                value={description}
                onKeyDown={(event)=>{
                if(event.key === 'Enter' && (estado.trim() !== '')){
                updateTask(task.id, {tarea: estado, description:description});}}}
                onChange={(event) =>
               setDescription (event.target.value)}/>) : <div className="editar-input">{task.description}</div>}
            </div>

            <div className="icons">
              <button
                className="edit"
                onClick={() => cambio(task.id)}
              >
                <MdEditSquare/>
              </button>
              <button
                className="garbage"
                onClick={() => deleteTask(task.id)}
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
     {/* <ul className="container"> */}
     {mapeo()}
   <div className="container-clear">
  <button  onClick={clearAll} className="Botton-clear">Clear all</button>
    </div>
    {/* </ul> */}
  </div>
);
         };

export {TaskList};