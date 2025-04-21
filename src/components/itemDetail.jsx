
import Swal from 'sweetalert2';
import ArrayProd from "../assets/productos.json";
import React from 'react';
import Contador from "./contador.jsx";
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const itemDetail = () =>{
    const [estadoImg, setEstadoImg] = React.useState("white");
    const [items,setItems] = useState({});
    const {id}= useParams();
    const promesa = new Promise(resolve =>{
      setTimeout(() => {
          resolve(ArrayProd);
      }, 2000);
      })
      useEffect(() =>{
            promesa.then((res) => {
                    setItems(id ? res.find(item => item.id == id ):res);

                })
      },[id])


    const getImageSource = () => {
      console.log(items)
        if(items.id !="fordMaverick"){
              
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
          <div className="container-fluid">
        
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
                <Contador cantMax={items.stock} />
                <button className="btn btn-primary" style={{width:"auto"}} onClick={() => purchaseItem(items.id)}>Comprar</button>
              </div>
          
        </div>
      )
      
}
export default itemDetail;