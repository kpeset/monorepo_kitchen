import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <h1>LOGO DU SITE</h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/recipes">Les recettes</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
