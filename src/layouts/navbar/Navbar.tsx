import "./Navbar.scss";
import Logo from "./../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="side">
        <img src={Logo} />
        <h4 className="title white">Konfigurator servisa</h4>
      </div>
      <div className="side">
        <h5 className="white">Izračunajte trošak servisa</h5>
      </div>
    </nav>
  );
};

export default Navbar;
