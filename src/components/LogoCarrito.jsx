import ProductosEnCarro from "../assets/productosEnCarro.json";
import {Link} from 'react-router-dom';
import { CartContext } from "./context/cartContext";
import { useContext } from "react";
const logoCarrito = () =>{
    const {cart} = useContext(CartContext)
    const promesa = new Promise ( resolve =>{
        setTimeout(() => {
            resolve(ProductosEnCarro);
        }, 500);
    })
    
    let productInCart = cart.length;
    return (
        <Link to="/cart" id="linkCarrito" style={{color:"white",textDecoration:"none"}}><div className="containerLogoCarrito">
            <svg xmlns="http://www.w3.org/2000/svg" className ="logoCarrito" width="30" height="30" color="white" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
            <span className="cantidadProductos" style={{color:"white"}}>{productInCart}</span>
        </div> 
        </Link>
    )
}
export default logoCarrito;