
import Swal from 'sweetalert2';

import React from 'react';
import Contador from "./contador.jsx";
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Loading from "./Loading";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { CartContext } from './context/cartContext.jsx';
import Cart from './Cart.jsx';
import Error404 from './Error404.jsx';
const itemDetail = () =>{
    const [estadoImg, setEstadoImg] = React.useState("white");
    const [items,setItems] = useState({});
    const [estadoFlecha, setEstadoFlecha] = React.useState("black")
    const[cargando, setCargando] = React.useState(true)
    const {id}= useParams();
    const {addToCart,products} = useContext(CartContext)

    const onAdd= (cantidad) =>{
      console.log("Agregaste" + cantidad + "Producto(s) al carrito!!");
      let img = getImageSource()
      let producto={
        id:items.id,
        idx:items.idx+estadoImg,
        comesFrom:items.idx,
        imagenProd: img,
         precio: items.precio,
         quantity: cantidad,
         stock: items.stock,
         titulo: items.titulo,
         descripcion: items.descripcion
        }
      addToCart(producto)
      Swal.fire({
        icon:"success",
        title:"Agregado al carrito :D"
      }
      )
    }
    useEffect(() =>{
     setItems(products.find(producto => producto.idx === id))
     console.log(items,id);
     console.log(products);
     
      if(products.length>0){
        setCargando(false)
      }
    },[products])

    const getImageSource = () => {
  
        if(items.idx !="fordMaverick"){
              
        switch (estadoImg) {
          case "white":
            return items.imgUrlW;
          case "red":
            return items.imgUrlRed;
          case "blue":
            return items.imgUrlBlue;
          case "black":
            return items.imgUrlBlack;
          case "orange":
            return items.imgUrlOrange;
          case "gray":
            return items.imgUrlGray;
          default:
            return items.imgUrlW;
        }
      }
        else{
          switch (estadoImg) {
            case "xltBlue":
              return items.imgUrlXLTBlue;
            case "lariat":
              return items.imgUrlLariat;
            default:
              return items.imgUrlAzure;
            
      }
      }
      };
      return(
        !cargando?
          items==undefined?
          <Error404/>:

          <div className="container-fluid d-flex" style={{width:"100vw", height:"100vh",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center"}}>
            <div className="d-flex align-items-center" style={{width:"100%", justifyContent:"space-between",padddingLeft:"50px", paddingRight:"50px"}}>
            <Link to="/productos"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={estadoFlecha} onMouseOver={() =>setEstadoFlecha("#005c7d")} onMouseLeave={()=>setEstadoFlecha("black")} className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Link>
            <h2>{items.titulo}</h2>
            </div>
              <div  className="row d-flex align-items-center">
              <div className="col-md-7" style={{display:"flex", flexFlow:"row nowrap",gap:"10px",alignItems:"center"}}>
            
              <img src={getImageSource()} className="img-fluid" style={{width:"90%"}}  alt="" />
              <div className="btnColores d-flex" style={{ flexFlow:"column nowrap",gap:"4px"}}>
              {items.coloresDisponibles && items.coloresDisponibles.length > 0 ? (
              items.coloresDisponibles.map((color) => (
                <button
                  key={color}
                  className="btnColores"
                  id={color}
                  onClick={() => setEstadoImg(color)}
                ></button>
              ))
            ) : (
              <p>No colors available</p>
            )}</div>
                
              </div>
              <div className="col-md-5 " style={{display:"flex", flexFlow:"column nowrap",gap:"10px"}}>
                <h2>{items.titulo}</h2>
                <p>{items.descripcion}</p>
                <p>Precio: ${items.precio}</p>
              </div>
              </div>
              <div className="row d-flex " style={{display:"flex", flexFlow:"row nowrap",gap:"10px",alignItems:"center",justifyContent:"center"}}>
                {
                  items.stock>0?
                  <>
                    <Contador cantMax={items.stock} onAdd={cantidad => onAdd(cantidad)} />
                    <Link to="/cart" style={{width:"auto"}} ><button className="btn btn-primary">Finalizar compra</button></Link>
                    
                   </>
                   :
                   <span>No tenemos stock lo sentimos</span>
                }
              </div>
          
        </div>
        :
        <Loading></Loading>
      )
      
}
export default itemDetail;