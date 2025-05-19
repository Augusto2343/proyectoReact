import React from 'react';
import {useEffect} from "react"
import { Link } from "react-router-dom";
const CardItem = ({ item }) => {
  const [estadoImg, setEstadoImg] = React.useState("white");

  const getImageSource = () => {
    if(item.idx !="fordMaverick"){
          
    switch (estadoImg) {
      case "white":
        return item.imgUrlW;
      case "red":
        return item.imgUrlRed;
      case "blue":
        return item.imgUrlBlue;
      case "black":
        return item.imgUrlBlack;
      case "orange":
        return item.imgUrlOrange;
      case "gray":
        return item.imgUrlGray;
      default:
        return item.imgUrlW;
    }
  }
    else{
      switch (estadoImg) {
        case "xltBlue":
          return item.imgUrlXLTBlue;
        case "lariat":
          return item.imgUrlLariat;
        default:
          return item.imgUrlAzure;
        
  }
  }
  };
  useEffect(()  => {
      
      const cards = document.querySelectorAll(".card");
      const colorBtn = document.querySelectorAll(".btnColores");
      const contenidoCard = document.querySelectorAll(".cardContent");
      const parrContent = document.querySelectorAll(".parrContent");

      parrContent.forEach((item)=> item.classList.add("placeholder"))
      contenidoCard.forEach(item =>{
        item.classList.add("placeholder")


      })
      colorBtn.forEach(btn=>{
          btn.classList.add("disabled")
          btn.classList.add("placeholder")
      })
      
      cards.forEach(element=>{
        
        element.classList.add("placeholder-glow")
        
      })
      setTimeout(() =>{
        parrContent.forEach((item)=> item.classList.remove("placeholder"))

        contenidoCard.forEach(item =>{
          item.classList.remove("placeholder")
        })
        colorBtn.forEach(btn=>{
            btn.classList.remove("disabled")
            btn.classList.remove("placeholder")
        })
        
        cards.forEach(element=>{
          
          element.classList.remove("placeholder-glow")
          
        })
      },2000)
  },[])
  const palabras = item.descripcion.split(' ');
  return (
    <div
      className="card"
      style={{
        border: "1px solid #000",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px",
        height: "400px",
        width: "300px",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={getImageSource()} className="cardContent card-img-top" alt={item.id} />
      <div className="card-body">
        <div className="navColores">
          {item.coloresDisponibles && item.coloresDisponibles.length > 0 ? (
            item.coloresDisponibles.map((color) => (
              <button
                key={color}
                className="btnColores"
                id={color}
                onClick={() => setEstadoImg(color)}
              ></button>
            ))
          ) : (
            <p>No colors available</p>
          )}
        </div>

        <h5 className=" card-title cardContent">{item.titulo}</h5>
        <p className=" card-text ">{
          palabras.map((palabra,index) =>(
            
            <span className="parrContent" key={index}>
              
                {palabra}
            </span>
          )
            )
        }</p>
        <Link to={"/product-detail/"+item.idx} className=" btn btn-primary configurarBtn cardContent">Configurar</Link>
      </div>
    </div>
  );
};

export default CardItem;

