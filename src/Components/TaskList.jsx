import tareas from "../Tareas"
import {MdDelete, MdEditSquare} from 'react-icons/md'

function TaskList () {
  return(
    <div >
     <ul className="container">
         {tareas.map((e) => (
        <li className='barras' key={e.id}> 
        <input type="checkbox" className="checkbox" id={"checkbox-" + e.id} />
  <label htmlFor={"checkbox-" + e.id}></label>
     {e.tarea}
     <div className="icons">
              <MdEditSquare className="edit" />
              <MdDelete className="garbage" />
            </div>
     </li>
    
  ) )}
  <div className="container-clear">
  <input type="text" placeholder="You have pending Task" className="input-clear"/>
  <button className="Botton-clear">Clear all</button>
  </div>
    </ul>
  </div>
);
}


export {TaskList};