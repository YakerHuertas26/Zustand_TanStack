import ListaPokemon from "../B_Elements/ListaPokemon";
import { ContenedorCard, Numero } from "../Styles/S_cardPokemon";
import useStorePokemon from "../Store/ApiPokemon";

const CardPokemon = () => {
    const {listaPokemon}=useStorePokemon();
    return ( 
        listaPokemon.results.map((element,index)=>
            <ContenedorCard color="#37f5df" key={index}>
                <ListaPokemon pokemon={element} />
                <Numero color="#a6f42a">#1</Numero>
            </ContenedorCard>)
    );
}

export default CardPokemon;