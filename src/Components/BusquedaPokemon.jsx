import { ImgBulbasaur, ImgCharmander, ImgPikachu, ImgSquirtle, InputBuscar } from "../B_Elements/BarraBusqueda";
import { Icon } from "@iconify/react/dist/iconify.js";
// cada que den en el icono buscarga haga un refresh de la api
import { useQueryClient } from "@tanstack/react-query";
const BusquedaPokemon = ({refetch}) => {

    const usequeryClient= useQueryClient();
    return ( 
            <section className="content">
                <InputBuscar/>
                <Icon className="icono"        
                icon="ic:twotone-search" 
                onClick={()=>refetch()}/>
            </section>
    );
}
const ImagenesHeader = () => {
    return ( 
        <section className="contentImg">
            <ImgBulbasaur/>
            <ImgCharmander/>
            <ImgSquirtle/>
            <ImgPikachu/>
        </section>
     );
}
 
;
export {BusquedaPokemon, ImagenesHeader};