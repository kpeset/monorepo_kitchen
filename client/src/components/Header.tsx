import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDarkTheme } from "../services/DarkThemeContext";

export default function Header() {
  const [formSearch, setFormSearch] = useState("");

  const { darkTheme, setDarkTheme } = useDarkTheme();

  const navigate = useNavigate();

  const sendSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${formSearch}`);
  };

  const handleChangeSearchForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormSearch(event.currentTarget.value);
  };

  const switchMode = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <nav>
      <h1>LOGO DU SITE</h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/categories">Les catégories</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
      <form onSubmit={sendSearchForm}>
        <input
          value={formSearch}
          type="text"
          placeholder="Cherchez une recette..."
          onChange={handleChangeSearchForm}
        />
        <input type="submit" />
      </form>
      <button type="button" onClick={switchMode}>
        Light/Dark
      </button>
    </nav>
  );
}
