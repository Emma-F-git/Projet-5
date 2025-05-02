import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";

function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
