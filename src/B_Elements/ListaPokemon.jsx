import { Imagen, ImgPequeña, Numero } from "../Styles/S_cardPokemon";

const ListaPokemon = ({pokemon,key}) => {

    return ( 
            <span key={key}>{(pokemon.name)}</span>  
    );
}

const NumeroPokemon = ({color}) => {
    return ( 
        <Numero color={color} >#1</Numero>
    );
}

const ImagenPokemon = () => {
    return ( 
        <Imagen>
            <img src='https://www.smashbros.com/wiiu-3ds/sp/images/character/lucario/main.png' alt="" />
        </Imagen>
    );
}

const ImagenPequeña = () => {
    return ( 
        <ImgPequeña src="https://www.smashbros.com/wiiu-3ds/sp/images/character/lucario/main.png" alt="" />
    );
}
 


export  {ListaPokemon,NumeroPokemon,ImagenPokemon,ImagenPequeña};