import {BusquedaPokemon, ImagenesHeader} from "../Components/BusquedaPokemon";
import { ContenedorBusqueda } from "../Styles/BuscarPokemonStyles";
const HeaderLayouts = () => {
    return ( 
        <>
        <ContenedorBusqueda>
            <ImagenesHeader/>
            <BusquedaPokemon/>
        </ContenedorBusqueda>
        </>
     );
}
 
export default HeaderLayouts;