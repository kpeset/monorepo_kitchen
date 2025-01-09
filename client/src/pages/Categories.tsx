import { useLoaderData } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";

interface CategorieTypes {
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export default function Categories() {
  const data = useLoaderData() as CategorieTypes[];

  console.info(data);

  return (
    <>
      <h2>Les catégories</h2>

      {data.map((category) => (
        <CategoryCard key={category.strCategory} category={category} />
      ))}
    </>
  );
}
