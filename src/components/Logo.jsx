import {Link} from "react-router-dom";
const logo = () => {

  return (
    <div className="logo">
      <Link to={"/"} >
      <img src="../../logo.png"className="imgLogo" alt="Logo bmw" />
      </Link>
    </div>
  );
}
export default logo;