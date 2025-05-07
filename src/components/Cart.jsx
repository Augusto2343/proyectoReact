import { useContext, useEffect,useState } from 'react';
import { CartContext } from './context/cartContext';
import { Link } from 'react-router-dom';
import NoProducts from "./NoProducts.jsx";

const Cart = () => {
    const [estadoFlecha, setEstadoFlecha] = useState("black")
    
    const {cart, removeItem, totalProductos, clear, sumaProductos, decrementarProd, aumentarProd,precioTotal,total} = useContext(CartContext);

    useEffect(() =>{
        precioTotal()
    },[cart])

    if(totalProductos() === 0) {
        return (
            <NoProducts></NoProducts>
        )
    }

    return (
        <div className="container py-5 " >
            <div className="d-flex align-items-center mb-4">
                <Link to="/productos" className="text-decoration-none me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={estadoFlecha} onMouseOver={() => setEstadoFlecha("#005c7d")} onMouseLeave={() => setEstadoFlecha("black")} className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </Link>
                <h2 className="mb-0">Tu carrito</h2>
            </div>

            
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
                                    <td colSpan="4" className="text-end fw-bold">Total:</td>
                                    <td className="text-center fw-bold text-primary" style={{fontSize:"30px"}}>{total}</td>
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
            

            <div className="d-flex justify-content-end mt-4">
                <Link to="/checkout" className="btn btn-primary">
                    Proceder al pago
                    <i className="bi bi-arrow-right ms-2"></i>
                </Link>
            </div>
        </div>
    )
}

export default Cart;