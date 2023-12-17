import { Route, Routes } from "react-router-dom";
import Home from '../Page/Home';
import SobreNosotros from '../Page/SobreNosotros';
import Tareas from '../Page/Tareas';

function AppRouter (){
    return(

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
        <Route path="/tareas" element={<Tareas/>} />  
        </Routes>
    )
};

export default AppRouter;