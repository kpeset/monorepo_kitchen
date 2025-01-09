import { useLoaderData } from "react-router-dom";

interface recipeTypes {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export default function RecipeDetails() {
  const recipe = useLoaderData() as recipeTypes;

  return (
    <>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt="" />
      <p>{recipe.strInstructions}</p>
    </>
  );
}
