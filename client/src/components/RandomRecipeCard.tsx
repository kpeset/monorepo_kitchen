import { Link } from "react-router-dom";

import "../styles/recipeCard.css";

interface RandomRecipeTypes {
  recipe: {
    strMeal: string;
    strMealThumb: string;
    strArea: string;
    idMeal: string;
  };
}

export default function RandomRecipeCard({ recipe }: RandomRecipeTypes) {
  return (
    <article>
      <div className="left">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="plat" />
      </div>
      <div className="right">
        <p>{recipe.strArea}</p>
        <div>
          <Link to={`/recipes/${recipe.idMeal}`}>VOIR RECETTE</Link>
        </div>
      </div>
    </article>
  );
}
