import { useQuery } from "@tanstack/react-query";
import useStorePokemon from "../store/ApiPokemon";

const Home = () => {
    const {listaPokemon,mostrarPokemon}= useStorePokemon()
    const {isPending, isError, data, error}= useQuery({
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
        <div>
            <ul>
            {
                data.results.map((element,index)=>{
                    return <li key={index}>{element.name}</li>
                })
            }
            </ul>

            
        </div>
     );
}
 
export default Home;