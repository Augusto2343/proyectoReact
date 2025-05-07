import {collection,getDocs,getFirestore} from "firebase/firestore";
import React, { createContext,useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const[total,setTotal] = useState(0);
    const[reiniciar,setReiniciar] = useState(true);
    useEffect(() =>{
        const db= getFirestore();
        const itemsCollection = collection(db,"items");
        getDocs(itemsCollection).then((snapShot) =>{
            setProducts(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
            setReiniciar(false)
        });
    },[reiniciar]);
    useEffect(() =>{
        console.log(cart)
    },[cart])
    const addToCart = (item) =>{
        let product
            if( isInCart(item.idx)){
            product = cart.find(product => product.idx === item.idx);
            product.quantity += item.quantity;
            setCart([...cart]);
            console.log("hollaaaa")
            products.forEach(producto =>{
                if(producto.idx === item.comesFrom){
                        producto.stock -= item.quantity 
                }   
            })
            console.log(products);
            
                        
        }
    
        else{
            product = item;
            console.log(product)
            setCart([...cart, product]);
            console.log();
            
            products.forEach(producto =>{
                if(producto.idx === item.comesFrom){
                        producto.stock -= item.quantity 
                }   
            })
            console.log(products);
            
        }
    }
        const removeItem = (id) =>{
            const productsFilter = cart.filter(item => item.idx != id);
            setCart(productsFilter)
        }
        const clear =() =>{
            setCart([])
            setReiniciar(true)
        }
        const isInCart = (id) =>{
            return cart.some(item => item.idx === id    );
        }
        const totalProductos = () =>{
            return cart.reduce((acum, item) => acum += item.quantity, 0);
        }
        const sumaProductos = () =>{
            return cart.reduce((acum, item) => acum += item.quantity * item.price, 0);
        }
        const decrementarProd = (id) =>{
            let product = cart.find(item => item.idx == id);
            
            console.log(product.idx)
            if(product.quantity >1 ){
                product.quantity -= 1;
                setCart([...cart]);
                
            } 
            else{
                removeItem(id)
            }
            products.forEach(producto =>{
                if(producto.idx === product.comesFrom){
                    producto.stock +=1
                }
            })
        }
        const aumentarProd = (id) =>{
            let product = cart.find(item => item.idx == id);

            if(product.quantity < product.stock){
                product.quantity += 1;
                setCart([...cart]);
                products.forEach(producto =>{
                    if(producto.idx === item.comesFrom){
                        producto.stock -= 1
                    }
                })
            }

        }
        const precioTotal=() =>{
            setTotal(0)
            cart.map(item=> {
                console.log(item.precio* item.quantity)
                setTotal(prevTotal => prevTotal + item.precio*item.quantity)
                
            })
            console.log(total)

        }
        return<CartContext.Provider value={{products, cart, addToCart, removeItem, clear, isInCart, totalProductos, sumaProductos, decrementarProd, aumentarProd,precioTotal,total}}>
            {children}
        </CartContext.Provider>
    
 }
 export default CartContextProvider;