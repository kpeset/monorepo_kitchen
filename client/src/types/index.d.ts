interface RecipeTypes {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strInstructions: string;
}

interface RecipeProps {
  recipe: RecipeTypes;
}

interface CategoryTypes {
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface CategoryProps {
  category: CategoryTypes;
}
