import { useContext, useState } from 'react';
import { Context } from '../hooks/Context'

function Input () {

    const [formsValidation, setFormsValidation]= useState({
        newTask: undefined,
    });

    const { newTask, setNewTask, description, setDescription,
         agregarTarea }= useContext(Context);

        const handleSubmit = (event) => {
         event.preventDefault();
         if(isValid()){
            agregarTarea(formsValidation.newTask);
            formsValidation.newTask = "";
         }
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
              handleSubmit(event);
            }
          };

        const handleTaskValidation = (e) => {
            const value = e.target.value;

            if(value.trim().length === 0){
                setFormsValidation({
                  ...formsValidation,
                  newTask: 'This field is required.'
                });
              } else if (value.trim().length < 4) {
                setFormsValidation({
                  ...formsValidation,
                  newTask: 'The title must be longer than 3 characters.'
                });
              } else {
            setFormsValidation({
                ...formsValidation, 
                newTask: true
              })}}
            
              function isValid() {
                return Object.keys(formsValidation).every(
                  (key) => formsValidation[key] === true
                );
              };
        
    return(
        <form onSubmit={handleSubmit}>
        <div className="add">
        <input type="text" placeholder="add new Task" className="input"
        value={newTask}
        onKeyDown={handleKeyDown} 
        onChange= {(e) => {
            setNewTask(e.target.value);
            handleTaskValidation(e);}}/> 
        {formsValidation.newTask && <span style={{color:'red'}}>{formsValidation.newTask}</span>}
        
        <input type="text"  placeholder="add Description (optional)" className="input descripcion"
        value={description}
        onKeyDown={handleKeyDown } 
        onChange={(e)=> setDescription(e.target.value)}/> 
        
        <button onClick={handleSubmit} disabled = {!isValid} className="añadir">+</button>
        </div>
        </form>
    )
};

export default Input;