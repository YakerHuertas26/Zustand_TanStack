import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../Styles/BuscarPokemonStyles";

const IconoBuscar = () => {
  return <Icon className="icono" icon="ic:twotone-search" />;
};

const InputBuscar = () => {
  return <Input type="text" placeholder="...Buscar" />;
};
const ImgBulbasaur = () => {
  return (
    <img
      alt="Pokemon bulbasaur gif"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
    />
  );
};

const ImgCharmander = () => {
  return (
    <img
      alt="Pokemon charmander gif"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
    />
  );
};
const ImgSquirtle = () => {
  return (
    <img
      alt="Pokemon squirtle gif"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
    />
  );
};
const ImgPikachu = () => {
  return (
    <img
      alt="Pokemon pikachu gif"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
    />
  );
};

export { IconoBuscar, InputBuscar, ImgBulbasaur,ImgCharmander,ImgSquirtle,ImgPikachu };
