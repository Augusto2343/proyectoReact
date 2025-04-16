import { Link } from "react-router-dom";
const nav = () => {
    return(
        <nav className="nav"> 
            <Link to={"/"} className="navLink">Home</Link>
            <Link to={"/productos"} className="navLink">Productos</Link>
        </nav>

    )
}
export default nav;