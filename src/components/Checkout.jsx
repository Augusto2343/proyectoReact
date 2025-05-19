import { useContext, useDebugValue, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { CartContext } from "./context/cartContext";
import { collection, getFirestore,doc,addDoc,getDocs ,getDoc,updateDoc} from "firebase/firestore";
import Swal from "sweetalert2";
import Loading from "./Loading";
const checkout =() =>{
    const {cart,clear,totalProductos, } = useContext(CartContext)
     const [nombre,setNombre] = useState("");
     const [correo,setCorreo] = useState("");
     const [direccion,setDireccion] = useState("");
     const [orderId, setOrderId] = useState("");
    const [telefono,setTelefono] = useState(0);
    const[productos,setProductos] = useState();
    const [cargando,setCargando] = useState(true);
    const [pedidoFinalizado,setPedidoFinalizado] = useState(false);
    const [totalCompra,setTotalCompra]=useState();
    useEffect(()=>{
            const db= getFirestore();
        const itemCollection = collection(db,"items");
        getDocs(itemCollection).then((snapShot)=>{
            let producto = snapShot.docs.map(items =>({id:items.id, ...items.data()}))
            setProductos(producto);
            setCargando(false)
            })
    },[])
    useEffect(() =>{
        if(pedidoFinalizado){
            console.log("aiaiai");
        
            Swal.fire({
                title:"Compra exitosa",
                html: `
                    <h2>¡Gracias por elegirnos <b>${nombre}</b> nos vemos pronto!</h2>
                    <h3>El total de su compra fue de $<b>${totalCompra}</b> </h3>
                `,
                icon:"success"
            }

            )
        }
        
    },[pedidoFinalizado])

    const vaciarCampos = () =>{
        setNombre("");
        setCorreo("");
        setDireccion("");
        setTelefono("");
        console.log(productos);
        
    }
    const devolverTotal=(productos)=>{
        let total=0;
        for (const producto of productos) {
            total+=producto.price*producto.quantity
        } 
        return total;
    }
    const subirPedido=() =>{
        try{
            //Seteando los datos de la compra
            const comprador = {name:nombre,email:correo,address:direccion,phone:telefono}
            const productos = cart.map(item => ({id:item.id,idx:item.idx,title:item.titulo,price:item.precio,quantity:item.quantity}));
            const fecha = new Date();
            const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}-${fecha.getHours()}-${fecha.getMinutes()}:${fecha.getSeconds()}`
            const orden = {comprador,productos,date:fechaActual,total:devolverTotal(productos)}
            
            const db = getFirestore();
            const ordersCollection = collection(db,"orders");
            console.log(cart);
            
            console.log(productos)
            console.log(orden);
            console.log(comprador);
            
            addDoc(ordersCollection, orden).then(snapshot =>{
                setOrderId(snapshot.id);
            
            
            })
            for (const item of productos) {  
            const docRef = doc(db,"items",item.id);
            getDoc(docRef).then(snapshot=>{
                let document = {...snapshot.data()};
                updateDoc(docRef,{stock:(document.stock - item.quantity)})
            })
        }
        setTotalCompra(orden.total);
        clear()
            }catch(e){
                console.log(e);
                Swal.fire({
                title:"Lo sentimos ha ocurrido un error",
                icon:"error"
            }
            )
    }}

    const realizarPedido = () =>{
        console.log("holaa");
        if(cart.length == 0){
            console.log("aiaii");
            Swal.fire({
                title:"Oh oh no tienes nada en el carrito para comprar",
                icon:"error"
            }
            )
            
            
        }
        
        subirPedido();
       
        setPedidoFinalizado(true)
    }

    
    return(
        cargando?
        <Loading></Loading>
        :
        <> 
        <div className="formCheckout d-flex align-items-center justify-content-center" style={{"height":"100vh"}}>
            <form className="d-flex w-50" style={{"flexFlow":"column nowrap" }}>
                <h2>Formulario checkout</h2>
                
                <label  >Nombre y apellido</label>
                <input className="formInput" type="text" name="nombreYApellido" placeholder="Ingrese su nombre y apellido:" value={nombre}  onChange={(e)=>{setNombre(e.target.value)}} required/>

                <label  >Correo</label>
                <input className="formInput" type="email" name="correo" placeholder="Ingrese su correo:" value={correo}  onChange={(e)=>{setCorreo(e.target.value)}} required/>

                <label  >Direccion</label>
                <input className="formInput" type="text" name="direccion" placeholder="Ingrese su dirección:" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}  required/>

                <label  >Teléfono</label>
                <input className="formInput" name="telefono" placeholder="Ingrese su telefono:" value={telefono} onChange={e => setTelefono(e.target.value)} type="number"  required/>
                
                <div className="opcionales d-flex align-items-center" style={{"justifyContent":"space-between"}} >
                    <label>Desea recibir notificaciones de nuevos lanzamientos o promociones</label>
                    <input type="checkbox" name="notificaciones" id="" />
                </div>
                <div className="botones d-flex"  style={{"justifyContent":"space-between"}} >
                    <button onClick={vaciarCampos} className="btn btn-danger ">Cancelar el pedido.</button>
                    <button onClick={(e)=>{
                    e.preventDefault();
                    realizarPedido()
                    }} className="btn btn-primary">Concretar el pedido.</button>
                </div>
            </form>
         </div>
         </>

    )
}
export default checkout