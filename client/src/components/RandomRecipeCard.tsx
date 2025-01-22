import { Link } from "react-router-dom";

import "../styles/recipeCard.css";

export default function RandomRecipeCard({ recipe }: RecipeProps) {
  return (
    <article>
      <div className="left">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="plat" />
      </div>
      <div className="right">
        <div>
          <Link to={`/recipes/${recipe.idMeal}`}>VOIR RECETTE</Link>
        </div>
      </div>
    </article>
  );
}
