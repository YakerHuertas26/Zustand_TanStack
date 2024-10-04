
import { Input } from "../Styles/BuscarPokemonStyles";
import useStorePokemon from "../Store/ApiPokemon";




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

export { InputBuscar, ImgBulbasaur,ImgCharmander,ImgSquirtle,ImgPikachu };
