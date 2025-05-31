import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {useState} from 'react';
const contador = ({cantMax,onAdd}) =>{
    const maxUnities = cantMax;
    const [contador, setContador] = useState(1);
    const [agregado, setAgregado] = useState(false);
    const incrementar = () => {
        console.log(cantMax);
        
        maxUnities > contador ?  
        setContador(contador + 1)
        : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `No puedes agregar más de ${maxUnities} productos al carrito!`
        })
    };
    const decrementar = () => {
        contador > 1 ?
        setContador(contador - 1)
        : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `No puedes agregar menos de 1 producto al carrito!`
        })
    };
    return(
        <div className="container d-flex align-center justify-between ">
        <div className="container d-flex" style={{alignItems:"center",gap:"5px"}}>
            <div className="btn-group" role="group" aria-label="Basic outlined example" style={{width:"auto"}}>
                <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
                <button type="button" className="btn btn-outline-primary">{contador}</button>
                <button type="button" className="btn btn-outline-primary" onClick={decrementar}>-</button>
            </div>
            <button className="btn btn-primary " onClick={() => {onAdd(contador)
                setContador(1);
                setAgregado(true);
            }}>Agregar al carrito</button>
        </div>
            
            <Link to="/cart" style={agregado?{ width:"auto" } : {display:"none"}} ><button className="btn btn-primary">Finalizar compra</button></Link>
        </div>
    )

}
export default contador;