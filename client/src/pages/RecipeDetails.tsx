import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData() as RecipeTypes;

  return (
    <>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt="" />
      <p>{recipe.strInstructions}</p>
    </>
  );
}
