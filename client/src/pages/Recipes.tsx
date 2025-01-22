import { useLoaderData } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = useLoaderData() as RecipeTypes[];

  return (
    <>
      <h1>Nos recettes</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </>
  );
}
