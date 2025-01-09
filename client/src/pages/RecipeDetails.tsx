import { useLoaderData } from "react-router-dom";

interface recipeTypes {
  name: string;
  picture: string;
  description: string;
}

export default function RecipeDetails() {
  const recipe = useLoaderData() as recipeTypes;

  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.picture} alt={recipe.name} />
      <p>{recipe.description}</p>
    </>
  );
}
