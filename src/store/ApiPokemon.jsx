import { create } from "zustand";

const useStorePokemon = create((set)=>({
    listaPokemon:[],
    mostrarPokemon: async ()=>{
        const enpoint= 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
        const peticion= await fetch(enpoint);
        const datos= await peticion.json();
        set({listaPokemon:datos})
        // para tanstack para tener un error
        return datos
    },

    // ***********BARRA BUSCAR pOKEMON ++++++
    // estados para buscar un pokemon
    datosPokemon:[],
    buscarPokemon: async (nombrePokemon)=>{
        const endpoint= `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`
        try {
            const consulta= await fetch(endpoint)
            // si la consulta no va bien 
            if (!consulta.ok) {
                throw new Error("pokemon no encontrado");
            }
            // por defecto
            const datosPokemon= await consulta.json();
            set({datosPokemon:datosPokemon})
            return datosPokemon
        } catch (error) {
            // si ocurre un error en la consulta
            set({datosPokemon:null})
            
        }
    },

    // estado para input buscar
    nombrePokemon: "",
    setNombrePokemon:(e)=>set({nombrePokemon:e}),
    
}));

export default useStorePokemon;