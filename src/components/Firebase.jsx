import { useEffect, useState } from "react";
import Productos from "../assets/productos.json";
import { getDocs,getFirestore, collection, query,where, limit, addDoc } from "firebase/firestore";
const firebase = () =>{
    //Doc
     const [product, setProduct] = useState({});
     const [item, setItem] = useState([])
    // useEffect(() =>{
    //     const db = getFirestore();
    //     const productoDoc= doc(db, "items", "doQLVpdAeNBBEaO9E5Ct");
    //     getDoc(productoDoc).then((snapShot )=>{
    //         if(snapShot.exists()){

    //             console.log("El documento existe");
    //             let producto={id:snapShot.id,...snapShot.data()}
    //             setProduct(producto)
    //         }
    //         else{
    //             console.log("El documento no existe")
    //         }
    //     })
    // },[])
    
    // useEffect(() =>{
    //     const db = getFirestore();
    //     const itemsCollection = collection(db,"items");
    //     getDocs(itemsCollection).then((snapShot)=>{
    //         if(snapShot.size>0){
    //         console.log(snapShot);
    //         let producto=snapShot.docs.map((item) => ({id: item.id, ...item.data()}))
    //         console.log(producto);
    //         setItem(producto)
    //         }
    //     })
    // },[])

    // useEffect(() =>{
    //     const db = getFirestore();
    //     const itemsCollection = collection(db,"items");
    //     const q = query(itemsCollection,where("precio", "<", 30000),limit(1));
    //     getDocs(q).then((snapShot)=>{
    //         if(snapShot.size>0){
    //         console.log(snapShot);
    //         let producto=snapShot.docs.map((item) => ({id: item.id, ...item.data()}))
    //         console.log(producto);
    //         setItem(producto)
    //         }
    //     })
    // }
    // ,[])


    // //Carga de productos en Firestore
    // useEffect(() =>{
    //     const db = getFirestore();
    //     const itemCollection = collection(db,"items");
    //     for (const product of Productos) {
    //         addDoc(itemCollection, product);
    //         console.log("Producto agregado");
            
            
    //     }    
    // },[])
    useEffect(() =>{
        const db = getFirestore();
        const itemCollection = collection(db,"items");
        getDocs(itemCollection).then((snapShot)=>{
            if(snapShot.size>0){
            console.log(snapShot);
            let producto=snapShot.docs.map((item) => ({id: item.id, ...item.data()}))
            console.log(producto);
            setItem(producto)
            }
        })
    },[])



}
export default firebase;