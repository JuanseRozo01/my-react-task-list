import { useContext, useState } from 'react';
import { Context } from '../Contexts/Context';
import { Button, Input, Stack } from '@chakra-ui/react'

function Fomrs () {

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
        };

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
              })}};
            
              function isValid() {
                return Object.keys(formsValidation).every(
                  (key) => formsValidation[key] === true
                );
              };
        
    return(
        <form onSubmit={handleSubmit}>
        <Stack spacing={3} align='center'>
        <Input variant='filled' placeholder='add new Task' mt='10px' isInvalid w='50vh'
        errorBorderColor='crimson'
        value={newTask}
        onKeyDown={handleKeyDown} 
        onChange= {(e) => {
            setNewTask(e.target.value);
            handleTaskValidation(e);}}/> 
        {formsValidation.newTask && <span style={{color:'red'}}>{formsValidation.newTask}</span>}
        
        <Input variant='filled' placeholder='add Description (optional)' isInvalid w='50vh'
        errorBorderColor='crimson'
        value={description}
        onKeyDown={handleKeyDown } 
        onChange={(e)=> setDescription(e.target.value)}/> 
        
        <Button onClick={handleSubmit} disabled = {!isValid} colorScheme='blue' w='50vh' >+</Button>
        </Stack>
        </form>
    )
};

export default Fomrs;