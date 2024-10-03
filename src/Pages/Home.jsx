import { useQuery } from "@tanstack/react-query";
import useStorePokemon from "../Store/ApiPokemon";
import HomeLayouts from "../Layouts/HomeLayouts";
import HeaderLayouts from "../Layouts/HeaderLayouts";

const Home = () => {
    const {mostrarPokemon}= useStorePokemon()
    const {isPending, isError, error}= useQuery({
        queryKey:["mostrar Pokemon"],
        queryFn:mostrarPokemon,
        // para no estar haciendo consultas a la Api a cada rato
        staleTime:Infinity
    })
    if (isPending) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return ( 
        <div className="conteiner">
            {/* <HomeLayouts/> */}
            <HeaderLayouts/>
        </div>
    );
}

export default Home;