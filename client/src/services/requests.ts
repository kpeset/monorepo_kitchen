import axios from "axios";

const getRecipeDetails = (id: string) => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.data.meals[0])
    .catch((error) => console.error(error));
};

const getCategories = () => {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.data.categories)
    .catch((error) => console.error(error));
};

const getMealsByCategory = (category: string) => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
};

export { getRecipeDetails, getCategories, getMealsByCategory };
