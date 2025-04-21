import Swal from "sweetalert2";
import {useState} from 'react';
const contador = (cantMax) =>{
    const maxUnities = cantMax.cantMax;
    const [contador, setContador] = useState(1);
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
<div className="btn-group" role="group" aria-label="Basic outlined example" style={{width:"auto"}}>
  <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
  <button type="button" className="btn btn-outline-primary">{contador}</button>
  <button type="button" className="btn btn-outline-primary" onClick={decrementar}>-</button>
</div>
    )

}
export default contador;