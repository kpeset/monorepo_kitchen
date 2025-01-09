import { useLoaderData } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

interface RecipeTypes {
  id: number;
  name: string;
  description: string;
  picture: string;
}

export default function Recipes() {
  const recipes = useLoaderData() as RecipeTypes[];

  return (
    <>
      <h1>Nos recettes</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}
