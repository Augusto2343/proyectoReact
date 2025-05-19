import {Link} from 'react-router-dom';
const NoProducts = () =>{
    return(
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <h2 className="text-muted mb-4">Tu carrito está vacío</h2>
            <Link to="/productos" className="btn btn-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Volver a productos
            </Link>
        </div>
    )
}
export default NoProducts;