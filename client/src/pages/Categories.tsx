import { useLoaderData } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";

export default function Categories() {
  const data = useLoaderData() as CategoryTypes[];

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
