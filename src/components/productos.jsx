import Card from "./Card";
import {useEffect} from 'react';
import {useState} from 'react';
import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Loading from "./Loading";
import Error404 from "./Error404";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const Productos = () => {
    const [items,setItems] = useState([]);
    const {id}= useParams();
    const [estadoBtn, setEstadoBtn] =React.useState("active")
    const [estadoFlecha, setEstadoFlecha] = React.useState("black")
    const [cargando, setCargando] = React.useState(true)
    useEffect(() =>{
        const db= getFirestore();
        const itemCollection = collection(db,"items");
        getDocs(itemCollection).then((snapShot)=>{
            let producto = snapShot.docs.map(items =>({id:items.id, ...items.data()}))

            if(id){
            producto = producto.filter(item => item.category === id) 
            console.log("producto devuleve",producto);
            
            if(producto.length ==0){
                setCargando(false)

                return <Error404></Error404>;
            }
            setItems(producto)
            setCargando(false)
            }
            else{
                producto = producto.filter(item => item.destacado === true);
                console.log(producto);
                setItems(producto)
                setCargando(false)
            
            }
            })
    },[])
    const productosMostrar = !id ? items.filter(item => item.destacado === true) : items;

    return (
        !cargando ?
         !id ? <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{backgroundColor:"white", padding:"10px"}}>
                <h2>{!id ? "Productos destacados" : id}</h2>
                <div className="cardContainers" style={{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",zIndex:"998", padding:"10px"}}>
                    <Card items={productosMostrar}></Card>
                </div>
                <Link to={"/productos"}><button className="btn btn-primary">Ver más</button></Link>
            </div>
            </>
            :
            <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{backgroundColor:"white", padding:"10px", paddingTop:"100px",height:"100vh"}}>
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
        :
        <Loading></Loading>
);
}

export default Productos;
