import { useEffect, useState } from "react";
const seccionOfertas = () =>{
    const [arrOfertas, setArrOfertas] = useState([]);
    const ofertas = [
        {
            id: 1,
            nombre: "Ofertas semanales ",
            descripcion: "Descuentos en productos seleccionados",
            imagen: "../bannerOferta.png",

            descuento: 30,
        },
        {
            id: 2,
            nombre: "Oferta en BMW",
            descripcion: "Llevando 2 o mas productos de la misma marca BMW recibis un 20% de descuento en el total de la compra",
            imagen: "../bannerOferta2.png",
            descuento: 20,
        },
        {
            id: 3,
            nombre: "Oferta de las camionetas",
            descripcion: "Llevando 3 o mas camionetas obtienes un 20% de descuento en el total de la compra",
            imagen: "../bannerOferta3.png",

            descuento: 20,
        }
    ]
    
    return(
        <div id="SeccionOfertas"className="container" style={{padding:"20px"}}> 
            <h2>Ofertas</h2>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            {ofertas.map((oferta, index) =>(
                index==1?
                <div className="carousel-item active" key={oferta.id}>
                <img src={oferta.imagen} className="d-block w-100" alt={oferta.nombre}/>
                </div>
                :
                <div className="carousel-item " key={oferta.id}>
                <img src={oferta.imagen} className="d-block w-100" alt={oferta.nombre}/>
                </div>
                
            ))}
            
        </div>
        <button className="carousel-control-prev" style={{color:"blue"}} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
      
    )
}
export default seccionOfertas;  