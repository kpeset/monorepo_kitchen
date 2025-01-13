import { useLoaderData, useParams } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

interface RecipeTypes {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export default function Search() {
  const results = useLoaderData() as RecipeTypes[];
  const { meal } = useParams();

  console.info(meal);

  if (!results) {
    return <h1>Pas de résultats pour {meal}</h1>;
  }

  return (
    <>
      <h2>
        Il y a {results.length} résultat{results.length > 1 ? "s" : ""} pour
        {meal}
      </h2>
      {results.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </>
  );
}
