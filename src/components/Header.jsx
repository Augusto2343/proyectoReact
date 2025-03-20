import Logo from "./Logo";
import Nav from "./Nav"
import LogoCarrito from "./LogoCarrito";
const header = () =>{
    return(
        <header className="header" style={{zIndex:"999"}}>
            <div className="contenidoHeader">
                <Logo/>
                <Nav/>
                <LogoCarrito/>
            </div>
        </header>
    )
}
export default  header;