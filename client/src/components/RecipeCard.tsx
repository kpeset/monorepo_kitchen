import { Link } from "react-router-dom";

import "../styles/recipeCard.css";

interface RecipeTypes {
  recipe: {
    name: string;
    picture: string;
    description: string;
    id: number;
  };
}

export default function RecipeCard({ recipe }: RecipeTypes) {
  return (
    <article>
      <div className="left">
        <h2>{recipe.name}</h2>
        <img src={recipe.picture} alt={recipe.description} />
      </div>
      <div className="right">
        <p>{recipe.description}</p>
        <div>
          <Link to={`/recipes/${recipe.id}`}>VOIR RECETTE</Link>
        </div>
      </div>
    </article>
  );
}
