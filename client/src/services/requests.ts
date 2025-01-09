const recipes = [
  {
    id: 1,
    name: "Poulet rôti",
    ingredients: ["poulet", "sel", "poivre", "huile d'olive", "ail", "thym"],
    instructions:
      "Préchauffer le four à 180°C. Assaisonner le poulet avec du sel, du poivre, de l'ail et du thym. Frotter avec de l'huile d'olive. Cuire au four pendant environ 1 heure 30 minutes.",
    picture:
      "https://www.maspatule.com/blog/wp-content/uploads/2023/03/Poulet_Roti_Final_Paysage-1440x1080.jpg",
    description:
      "Un classique de la cuisine française, tendre et juteux à l'intérieur avec une peau croustillante.",
  },
  {
    id: 2,
    name: "Salade César",
    ingredients: [
      "laitue romaine",
      "croutons",
      "parmesan",
      "poitrine de poulet",
      "anchois",
      "citron",
      "huile d'olive",
      "moutarde",
    ],
    instructions:
      "Préparer la vinaigrette avec de l'anchois, du citron, de l'huile d'olive et de la moutarde. Mélanger la laitue, les croutons, le parmesan et le poulet. Ajouter la vinaigrette.",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/225px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg",
    description:
      "Une salade fraîche et savoureuse avec une vinaigrette unique, parfaite pour un repas léger.",
  },
  {
    id: 3,
    name: "Gâteau au chocolat",
    ingredients: ["chocolat noir", "beurre", "sucre", "œufs", "farine"],
    instructions:
      "Faire fondre le chocolat avec le beurre. Battre les œufs avec le sucre, ajouter le mélange chocolat-beurre puis la farine. Cuire au four à 180°C pendant 25 minutes.",
    picture:
      "https://odelices.ouest-france.fr/images/recettes/2013/gateau_au_chocolat1.jpg",
    description:
      "Un dessert riche et décadent qui ravira tous les amateurs de chocolat.",
  },
];

const getAllRecipes = () => {
  return recipes;
};

const getRecipeDetails = (id: number) => {
  const result = recipes.find((recipe) => recipe.id === Number(id));

  if (!result) {
    throw new Error();
  }

  return result;
};
export { getAllRecipes, getRecipeDetails };
