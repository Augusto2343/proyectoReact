import Productos from "./productos";
import TituloSeccion from "./TituloSeccion";
const seccionProductos = ()  =>{
    return(
        <section className="seccionProductos">
            <TituloSeccion contenido="Nuestros productos. "/>
            <Productos/>
            
        </section>
    )
}
export default seccionProductos;
