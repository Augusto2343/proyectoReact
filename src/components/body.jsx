
import React from 'react';
import { useEffect } from 'react';
import Banner from "./Banner";
import { useRef } from 'react';
import Productos from "./productos.jsx";
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
            <Productos/>
        </main>
    </>
    
    )
    
}
export default Body;