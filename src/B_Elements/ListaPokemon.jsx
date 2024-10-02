
const ListaPokemon = ({pokemon,key}) => {

    return ( 
            <span key={key}>{(pokemon.name)}</span>  
    );
}

export default ListaPokemon;