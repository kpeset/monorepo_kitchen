import { useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

export default function CategoryDetails() {
  const data = useLoaderData() as RecipeTypes[];

  return (
    <>
      <h1>Liste des catégories</h1>
      {data.map((recipe) => (
        <RecipeCard key={recipe.strMeal} recipe={recipe} />
      ))}
    </>
  );
}
