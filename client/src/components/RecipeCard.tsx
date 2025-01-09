import { Link } from "react-router-dom";

import "../styles/recipeCard.css";

interface RecipeTypes {
  recipe: {
    strMealThumb: string;
    strMeal: string;
    idMeal: string;
  };
}

export default function RecipeCard({ recipe }: RecipeTypes) {
  return (
    <article>
      <div className="left">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="right">
        <div>
          <Link to={`/recipes/${recipe.idMeal}`}>VOIR RECETTE</Link>
        </div>
      </div>
    </article>
  );
}
