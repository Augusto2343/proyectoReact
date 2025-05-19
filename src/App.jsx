import Header from "./components/Header";
import Footer from "./components/Footer";
import CartContextProvider from "./components/context/cartContext.jsx";
import Body from './components/body.jsx';
import Categories from "./components/Categories";
import Productos from "./components/productos.jsx";
import ItemDetail from "./components/itemDetail.jsx";
import Cart from "./components/Cart.jsx";
import Error404 from "./components/Error404.jsx"
import './App.css'
import Checkout from "./components/Checkout.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/productos" element={<Categories/>}/>
       <Route path="/categories/:id" element={<Productos/>}/>
       <Route path="/product-detail/:id" element={<ItemDetail/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/checkout" element={<Checkout/>}></Route>
       <Route path="/*" element={<Error404/>}></Route>

    </Routes>
    <Footer/>
      
    </BrowserRouter>
    </CartContextProvider>
    </>
  )

}

export default App
