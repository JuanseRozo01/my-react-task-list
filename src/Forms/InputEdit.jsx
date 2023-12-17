import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

function InputEdit ({id, tarea, updateTask, description, type}){

    const [value, setValue] = useState(type === "title" ? tarea : description);

    const handleChange = (event) => {
       setValue(event.target.value);
    };
   
    const handleKeyDown = (event) => {
       if (event.key === "Enter" && value.trim() !== "") {
         updateTask(id, {
           tarea: type === "title" ? value : tarea,
           description: type === "description" ? value : description,
         });
       }
    };
   
    return (
       <Box>
         {(
           <Input
           focusBorderColor='lime'
           margin='3px'
           type="text"
           value={value}
           onKeyDown={handleKeyDown}
           onChange={handleChange}
           />
         )}
       </Box>
    );
   }
   
   export default InputEdit;