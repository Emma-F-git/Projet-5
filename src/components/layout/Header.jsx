import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import "../../styles/Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
