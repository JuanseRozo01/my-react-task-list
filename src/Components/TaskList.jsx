import { useContext } from "react";
import {MdDelete, MdEditSquare} from 'react-icons/md';
import { Context } from "../Contexts/Context";
import InputEdit from "../../src/Forms/InputEdit";
import { Checkbox, Stack, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function TaskList () {

  const[ t, i18n ]= useTranslation('global');

  const { tasks, deleteTask,
    updateTask,clearAll,
    cambio } = useContext(Context);

  const mapeo = () => {
    return (
      <Stack direction={['column']} spacing={3} mt='15px' w='50vh' align='center' color=''>
         
        {tasks?.map((task) => (
          <Flex w='100%' alignItems='center' bg='' borderRadius='5px' padding='10px' justifyContent='space-between' border='1px solid' 
           task ={task} key={task.id}>
            <Checkbox marginLeft='5px' colorScheme='green' isInvalid  id={`checkbox-${task.id}` }></Checkbox>

            <Box flexDirection='column' alignItems='center' bg='' marginLeft='5%'>
            {task.editado ? (
             <Box>
               <InputEdit id={task.id} tarea={task.tarea} updateTask={updateTask} description={task.description} type="title" />
               <InputEdit id={task.id} tarea={task.tarea} updateTask={updateTask} description={task.description} type="description" />
             </Box>
             ) : (
             <Box>
               <Text textAlign='center' fontWeight='Bold'>{task.tarea}</Text>
               <Text textAlign='center'>{task.description}</Text>
             </Box>
             )}
            </Box>

            <Box  marginLeft='20px'>
              <Button color='white' bg='#4299E1' borderRadius='5px' m='5px'
              onClick={() => cambio(task.id)}>
                <MdEditSquare/>
              </Button>
              <Button color='white' bg='red' borderRadius='5px' m='5px'
              onClick={() => deleteTask(task.id)}>
                <MdDelete />
              </Button>
            </Box>

          </Flex>
        )
      )}
        </Stack>
    );
  };
  
  return(
   <>
   {mapeo()}
   <Box direction={['column']} spacing={3} mt='13px'>
   <Button onClick={clearAll} bg='red' borderRadius='5px' color='white' padding='10px 20px' marginLeft='vh' w='50vh'>{t("TaskList.Button")}</Button>
  </Box>
  </>
);};

export {TaskList};