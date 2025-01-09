import { useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

interface RecipeTypes {
  strMealThumb: string;
  strMeal: string;
  idMeal: string;
}

export default function CategoryDetails() {
  console.info(name);

  const data = useLoaderData() as RecipeTypes[];
  console.info(data);

  return (
    <>
      <h1>Liste des catégories</h1>
      {data.map((recipe) => (
        <RecipeCard key={recipe.strMeal} recipe={recipe} />
      ))}
    </>
  );
}
