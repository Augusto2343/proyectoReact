import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from './components/body.jsx';
import Categories from "./components/Categories";
import Productos from "./components/productos.jsx";
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/productos" element={<Categories/>}/>
       <Route path="/categories/:id" element={<Productos/>}/>
       <Route path="/product-detail/:id" element={<Productos/>}/>
    </Routes>
    <Footer/>
      
    </BrowserRouter>

    </>
  )

}

export default App
