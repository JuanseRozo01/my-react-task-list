import { useState, useEffect } from "react";

function useFunctions (){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          setTasks(storedTasks);
        }
      }, []);

      const updateLocalStorage = (updatedTasks) => {
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }

      const agregarTarea = () => {
            const tarea = {
                id: String(Date.now()),
                tarea: newTask,
                description: description,
                editado: false,
            };
            setTasks(tasks => {
                const updatedTasks = [...tasks, tarea]
                updateLocalStorage(updatedTasks);
                return updatedTasks;
              }); 
              setDescription('')
              setNewTask('')
            }

        function clearAll(){
          localStorage.clear(tasks);
          setTasks([])
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

      function deleteTask (id) {
        const eliminar = tasks.filter((tasks) => tasks.id !== id); 
        localStorage.setItem('tasks', JSON.stringify(eliminar))
        setTasks(eliminar);
      };

      function updateTask(id, tareas){
        const edicionInput = tasks.map((task)=>{
          if(task.id === id){
            return{
              ...task, tarea: tareas.tarea, description: tareas.description, editado: false,
            }
          } return task
        });
        localStorage.setItem('tasks', JSON.stringify(edicionInput));
        setTasks(edicionInput);
      };

      return{
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
        cambio,
      };
};

export default useFunctions;