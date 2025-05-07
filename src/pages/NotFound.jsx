import "../styles/Header.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 id="error">404</h1>
      <h2 id="errorMessage">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
