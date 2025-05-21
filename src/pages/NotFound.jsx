import "../styles/NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found container">
      <h1 id="notFound">404</h1>
      <h2 id="notFoundMessage">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link id="linkNotFound" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
