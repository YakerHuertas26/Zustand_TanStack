import {ImagenPequeña, ImagenPokemon,ListaPokemon, NumeroPokemon } from "../B_Elements/ListaPokemon";
import { ContenedorCard, Numero } from "../Styles/S_cardPokemon";
import useStorePokemon from "../Store/ApiPokemon";

const CardPokemon = () => {
    const {listaPokemon}=useStorePokemon();
    return ( 
        listaPokemon.results.map((element,index)=>
            <ContenedorCard color="#37f5df" key={index}>
                <NumeroPokemon color={'#f6fd1f'}/>
                <ImagenPokemon/>
                <ListaPokemon pokemon={element} />
                <ImagenPequeña/>
            </ContenedorCard>)
    );
}

export default CardPokemon;