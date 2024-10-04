import {BusquedaPokemon, ImagenesHeader} from "../Components/BusquedaPokemon";
import { ContenedorBusqueda } from "../Styles/BuscarPokemonStyles";
const HeaderLayouts = ({refetch}) => {
    return ( 
        <>
        <ContenedorBusqueda>
            <ImagenesHeader/>
            <BusquedaPokemon refetch={refetch}/>
        </ContenedorBusqueda>
        </>
     );
}
 
export default HeaderLayouts;