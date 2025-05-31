import Nav from "./Nav.jsx"
import Logo from "./Logo.jsx"
const footer = () =>{
    return (
        <footer className="footer " style={{zIndex:"9999"}}>
            <div className="containerFooter">
                <Logo/>
                <Nav/>
            </div>
        </footer>

);}
export default footer;