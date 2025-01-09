import axios from "axios";

import { useEffect, useState } from "react";

import RandomRecipeCard from "../components/RandomRecipeCard";

interface RandomRecipeTypes {
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  idMeal: string;
}

export default function Home() {
  const [data, setData] = useState({} as RandomRecipeTypes);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setData(response.data.meals[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const getRandomMeal = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setData(response.data.meals[0]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Bienvenue sur Kitchen React</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        quaerat at odit ratione, harum ab delectus quas inventore, eos, corrupti
        repudiandae error dolore sint temporibus eveniet perferendis illum. Ex,
        itaque.
      </p>
      <button type="button" onClick={getRandomMeal}>
        Générer une recette aléatoire
      </button>
      <RandomRecipeCard recipe={data} />
    </>
  );
}
