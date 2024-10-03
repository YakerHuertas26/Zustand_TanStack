import { useQuery } from "@tanstack/react-query";
import useStorePokemon from "../Store/ApiPokemon";
import HomeLayouts from "../Layouts/HomeLayouts";

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
            <h2>home</h2>
        </div>
    );
}

export default Home;