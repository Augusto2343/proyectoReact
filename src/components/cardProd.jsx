import {useEffect} from 'react';
import {useState} from 'react';
import React from 'react';
const cardProducto = ({contenido}) => {
    const [estadoImg, setEstadoImg] = React.useState("white");
    const [estadoBtn, setEstadoBtn] =React.useState("active")
    let coloresDisp;
    const getImageSource = () => {
        switch (estadoImg) {
            case "white":
                return contenido.imgUrlW;
            case "red":

                return contenido.imgUrlRed;
            case "blue":
                return contenido.imgUrlBlue;
            case "black":
                return contenido.imgUrlBlack;
            case "orange":
                return contenido.imgUrlOrange;  
            default:
                return contenido.imgUrlW; // Default case
        }
    };
    useEffect(() =>{

    },[])
    return (
        <div className="card" style={{border:"1px solid #000", borderRadius:"10px", margin:"10px", padding:"20px", height:"400px", width:"300px", display:"flex", flexFlow:"column nowrap", justifyContent:"center", alignItems:"center"}}>
            <img src={getImageSource()} className="card-img-top" alt="bmw m3"/>
            <div className="card-body">
                <div className="navColores">
                    {contenido.coloresDisponibles && contenido.coloresDisponibles.length > 0 ? (
                        contenido.coloresDisponibles.map(color => (
                            <button key={color} className="btnColores" id={color} onClick={() => setEstadoImg(color)}></button>
                        ))
                    ) : (
                        <p>No colors available</p>
                    )}
                </div>

                <h5 className="card-title">{contenido.titulo}</h5>
                <p className="card-text">{contenido.descripcion}</p>
                <a href={`${contenido.id}`} className="btn btn-primary configurarBtn">Configurar</a>
            </div>
        </div>
    );
};
export default cardProducto;
