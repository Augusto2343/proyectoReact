import Card from "./Card";
import {useEffect} from 'react';
import ArrayProd from '../assets/productos.json';
import {useState} from 'react';
import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Productos = () => {
    const [items,setItems] = useState([]);
    const {id}= useParams();
    const [estadoBtn, setEstadoBtn] =React.useState("active")
    const [estadoFlecha, setEstadoFlecha] = React.useState("black")
    const promesa = new Promise(resolve =>{
            setTimeout(() => {
                resolve(ArrayProd);
            }, 2000);
            })
    useEffect(() =>{
            promesa.then((res) => {
                    setItems(id ? res.filter(item => item.category == id ):res);
                })
    },[id])

    const productosMostrar = !id ? items.filter(item => item.destacado === true) : items;

    return (
         !id ? <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{backgroundColor:"white", padding:"10px"}}>
                <h2>{!id ? "Productos destacados" : id}</h2>
                <div className="cardContainers" style={{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",zIndex:"998", padding:"10px"}}>
                    <Card items={productosMostrar}></Card>
                </div>
            </div>
            </>
            :
            <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{backgroundColor:"white", padding:"10px", paddingTop:"100px"}}>
                <div className="container-fluid d-flex align-items-center flex-row" style={{ width:"100%", justifyContent:"space-between",padddingLeft:"50px", paddingRight:"50px"}}>
                <Link to="/productos"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={estadoFlecha} onMouseOver={() =>setEstadoFlecha("#005c7d")} onMouseLeave={()=>setEstadoFlecha("black")} className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                </Link>
                <h2>{!id ? "Productos destacados" : id}</h2>
                </div>
                <div className="cardContainers" style={{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",zIndex:"998", padding:"10px"}}>
                    <Card items={productosMostrar}></Card>
                </div>
            </div>
            </>
    );
}

export default Productos;
