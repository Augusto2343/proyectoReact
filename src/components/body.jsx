
import React from 'react';
import { useEffect } from 'react';
import Banner from "./Banner";
import SeccionProductos from "./SeccionProductos";
const body = () =>{

    return(
        <>
        <main ref={contenido}>
            <Banner/>
            <SeccionProductos/>
        </main>
    </>
    
    )
    
}
export default body;