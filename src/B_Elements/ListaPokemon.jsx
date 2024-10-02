import useStorePokemon from "../Store/ApiPokemon";

const ListaPokemon = () => {
    const {listaPokemon}=useStorePokemon();
    return ( 
        <ul>
            {listaPokemon.results.map((element,index)=>
                <li key={index}>{element.name}</li>
            )}
        </ul>
    );
}

export default ListaPokemon;