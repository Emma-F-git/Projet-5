import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import "../../styles/Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo Kasa" />
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            À propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
