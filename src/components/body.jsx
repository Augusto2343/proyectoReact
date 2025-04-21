
import React from 'react';
import { useEffect } from 'react';
import Banner from "./Banner";
import { useRef } from 'react';
import Productos from "./productos.jsx";
import Nosotros from "./seccionNosotros.jsx"
import Ofertas from "./SeccionOfertas.jsx"
const Body = () =>{
    const contenido = useRef(null);
    const [estadoBtnConfigurar, setEstadoBtnConfigurar] = React.useState(false);
    useEffect (() => {
        console.log(estadoBtnConfigurar)
    },[estadoBtnConfigurar])
    return(
        <>
        <main ref={contenido}>
            <Banner/>
            <Nosotros/>
            <Productos/>
            <Ofertas/>
        </main>
    </>
    
    )
    
}
export default Body;