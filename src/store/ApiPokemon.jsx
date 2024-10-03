import { create } from "zustand";

const useStorePokemon = create((set)=>({
    listaPokemon:[],
    mostrarPokemon: async ()=>{
        const enpoint= 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
        const peticion= await fetch(enpoint);
        const datos= await peticion.json();
        set({listaPokemon:datos})
        // para tanstack para tener un error
        return datos;
    } 
}));

export default useStorePokemon;