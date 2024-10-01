import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";


const Rutas = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

     );
}
 
export default Rutas;