import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../Styles/BuscarPokemonStyles";
import useStorePokemon from "../Store/ApiPokemon";
// cada que den en el icono buscarga haga un refresh de la api
import { useQueryClient } from "@tanstack/react-query";
//  lo referencio


const IconoBuscar = () => {
  return <Icon className="icono"        
                icon="ic:twotone-search" 
                onClick={useQueryClient().invalidateQueries('buscar Pokemon')}/>;
};
const InputBuscar = () => {

  // función que modifica el estado del imput
  const {setNombrePokemon}= useStorePokemon();
  const nombrePokemonBuscar= (e)=>{
    setNombrePokemon(e.target.value)
  }
  return <Input 
          type="text" 
          placeholder="...Buscar" 
          onChange={nombrePokemonBuscar}/>;
};
const ImgBulbasaur = () => {
  return (
    <img
      alt="bulbasaur"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
    />
  );
};

const ImgCharmander = () => {
  return (
    <img
      alt="charmander "
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
    />
  );
};

const ImgSquirtle = () => {
  return (
    <img
      alt="squirtle"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
    />
  );
};

const ImgPikachu = () => {
  return (
    <img
      alt="pikachu"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
    />
  );
};

export { IconoBuscar, InputBuscar, ImgBulbasaur,ImgCharmander,ImgSquirtle,ImgPikachu };
