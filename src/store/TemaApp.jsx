import { create } from "zustand";
import { Dark,Clear } from "../Styles/themes";

const useStoreTema= create((set)=>({
    // tema incial
    tema:"dark",

    // estilos del tema oscuro
    estilosTema: Dark,

    // cambiar el thema
    setTema: ()=> set((state)=>({tema:state.tema==="dark"?"dark":"clear"})),

    // cambio los estilos
    setEstilosTema: ()=> set((state)=>({estilosTema:state.tema==="dark"? Dark:Clear}))
}));

export default useStoreTema;