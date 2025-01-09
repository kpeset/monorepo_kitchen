import { Link } from "react-router-dom";

interface CategoryTypes {
  category: {
    strCategory: string;
    strCategoryDescription: string;
    strCategoryThumb: string;
  };
}

export default function CategoryCard({ category }: CategoryTypes) {
  console.info(category);

  return (
    <article>
      <h2>{category.strCategory}</h2>
      <p>{category.strCategoryDescription}</p>
      <img
        src={category.strCategoryThumb}
        alt={category.strCategoryDescription}
      />
      <Link to={`/categories/${category.strCategory}`}>Voir la catégorie</Link>
    </article>
  );
}
