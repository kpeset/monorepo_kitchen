import { Link } from "react-router-dom";

import "../styles/recipeCard.css";

export default function RecipeCard({ recipe }: RecipeProps) {
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
