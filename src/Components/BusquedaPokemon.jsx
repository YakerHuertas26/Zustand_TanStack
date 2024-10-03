import { IconoBuscar, ImgBulbasaur, ImgCharmander, ImgPikachu, ImgSquirtle, InputBuscar } from "../B_Elements/BarraBusqueda";


const BusquedaPokemon = () => {
    return ( 
            <section className="content">
                <InputBuscar/>
                <IconoBuscar className="icono"/>
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