import { useQuery } from "@tanstack/react-query";
import useStorePokemon from "../Store/ApiPokemon";
import HomeLayouts from "../Layouts/HomeLayouts";
import HeaderLayouts from "../Layouts/HeaderLayouts";

const Home = () => {
    const {mostrarPokemon,buscarPokemon,nombrePokemon}= useStorePokemon()
    // const {isPending, isError, error}= useQuery({
    //     queryKey:["mostrar Pokemon"],
    //     queryFn:mostrarPokemon,
    //     // para no estar haciendo consultas a la Api a cada rato
    //     staleTime:Infinity
    // })
    // if (isPending) {
    //     return <span>Loading...</span>
    // }
    // if (isError) {
    //     return <span>Error: {error.message}</span>
    // }

    // Consulta para Buscar POKEMON 
        useQuery({
        // tambien se puede saber el paremetro 
        queryKey:["buscar Pokemon",nombrePokemon,],

        // cuando tiene parámetro con función fleca y detener las consulta hasta que termine de escribir
        queryFn: ()=>buscarPokemon(),enabled:false
    })
    return ( 
        <div className="conteiner">
            {/* <HomeLayouts/> */}
            <HeaderLayouts/>
            {nombrePokemon}
        </div>
    );
}

export default Home;