import { useContext, useEffect, useState, useRef } from 'react';
import { CartContext } from './context/cartContext';
import { Link } from 'react-router-dom';
import NoProducts from "./NoProducts.jsx";

const useAnimatedNumber = (targetValue, duration = 1000) => {
    const [displayValue, setDisplayValue] = useState(targetValue);
    const previousValue = useRef(targetValue);
    const animationFrame = useRef(null);

    useEffect(() => {
        const startTime = performance.now();
        const startValue = previousValue.current;
        const endValue = targetValue;
        const valueDiff = endValue - startValue;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (valueDiff * easeOutQuart);

            setDisplayValue(Math.round(currentValue * 1) / 1);

            if (progress < 1) {
                animationFrame.current = requestAnimationFrame(animate);
            }
        };

        animationFrame.current = requestAnimationFrame(animate);
        previousValue.current = targetValue;

        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [targetValue, duration]);
    
    return displayValue;
};

const Cart = () => {
    const [estadoFlecha, setEstadoFlecha] = useState("black")
    const {cart, removeItem, totalProductos, clear, sumaProductos, decrementarProd, aumentarProd, precioTotal, total} = useContext(CartContext);
    const animatedTotal = useAnimatedNumber(total);
    const [screenWidth,setScreenWidth] = useState(0);
    useEffect(() =>{
            const tamanioVentana= window.innerWidth;
            setScreenWidth(tamanioVentana)

        },[])
    useEffect(() =>{
        precioTotal()
    },[cart])

    if(totalProductos() === 0) {
        return (
            <NoProducts></NoProducts>
        )
    }

    return (
        <div className="container py-5 d-flex justify-content-center" style={{"height":"100vh","flexFlow":"column",}} >
            <div className="d-flex align-items-center mb-4">
                <Link to="/productos" className="text-decoration-none me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={estadoFlecha} onMouseOver={() => setEstadoFlecha("#005c7d")} onMouseLeave={() => setEstadoFlecha("black")} className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </Link>
                <h2 className="mb-0">Tu carrito</h2>
            </div>
            {
                screenWidth > 770 ?    
                <div className="cardTabla shadow-sm">
                    <div className="table-responsive">
                        <table className="table align-middle mb-10">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 text-center" style={{width: "15%"}}>Producto</th>
                                    <th className="border-0 text-center" style={{width: "25%"}}>Detalles</th>
                                    <th className="border-0 text-center" style={{width: "15%"}}>Precio</th>
                                    <th className="border-0 text-center" style={{width: "15%"}}>Cantidad</th>
                                    <th className="border-0 text-center" style={{width: "15%"}}>Total</th>
                                    <th className="border-0 text-center" style={{width: "15%"}}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.idx}>
                                        <td className="text-center">
                                            <img src={item.imagenProd} alt={item.title} className="img-thumbnail" style={{width: "200px", height: "100%", objectFit: "cover"}}/>
                                        </td>
                                        <td className="text-center">
                                            <h6 className="mb-0">{item.titulo}</h6>
                                        </td>
                                        <td className="text-center">
                                            <span className="fw-bold">${item.precio}</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrementarProd(item.idx)}>
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => aumentarProd(item.idx)}>
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <span className="fw-bold text-primary">${item.quantity * item.precio}</span>
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.idx)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-light">
                                <tr>
                                    <td colSpan="4" className="text-end fw-bold" id='totalPrice'>Total:</td>
                                    <td className="text-center">
                                        <span 
                                            className="fw-bold text-primary price-animation" 
                                            style={{fontSize:"30px", display: "inline-block"}}
                                        >
                                            ${animatedTotal}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-danger btn-sm" onClick={clear}>
                                            Vaciar carrito
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                :
                
                    cart.map((item)=>
                        <div key={item.idx} className="col-sm 6">
                        <div className='card'>
                            <div className="card-body ">
                                <div className="row">
                                        <div className="col md">
                                        <img className='img-thumbnail' src={item.imagenProd} alt={item.title} />
                                        </div>
                                        <div className="col d-flex flex-column" style={{justifyContent:"space-between"}}>
                                        <div className="row ">
                                            <h2 className='row'>
                                                {item.titulo}
                                            </h2>
                                            <h5 className='row' >
                                               Precio por unidad: $ {item.precio}
                                            </h5>
                                        </div>
                                            <div className="row">
                                                <h4 className='text-sm'>
                                                    Precio total: ${item.quantity * item.precio}
                                                </h4>
                                            </div>
                                        </div>
                                </div>
                                <div className="row " style={{"marginTop":"10px"}}>
                                    <div className="col md">
                                        <div className="d-flex align-items-center justify-content-center">
                                                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrementarProd(item.idx)}>
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => aumentarProd(item.idx)}>
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </div>
                                    </div>
                                    <div className="col sm d-flex flex-column"style={{alignItems:"flex-end",justifyContent:""}} >
                                         <button className="btn  btn-outline-danger btn-sm"  onClick={() => removeItem(item.idx)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                    
            
                
                }
                <div className="totalClearCart">
                    <h2 className=''>Total a pagar: <span 
                                            className="fw-bold text-primary price-animation" 
                                            style={{fontSize:"30px", display: "inline-block"}}
                                        >
                                            ${animatedTotal}
                                        </span></h2>
                    <div className="container ">
                    
                        <button className="btn btn-danger btn-sm" onClick={clear}>
                                Vaciar carrito
                        </button>
                    
                    </div>

                </div>
            
                
            

            <div className="d-flex justify-content-end mt-4">
                
                <Link to="/checkout" className="btn btn-primary">
                    Proceder al pago
                    <i className="bi bi-arrow-right ms-2"></i>
                </Link>
            </div>
        </div>
    )
}

const style = document.createElement('style');
style.textContent = `
    .price-animation {
        transition: color 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

export default Cart;