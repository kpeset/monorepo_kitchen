import { Link } from "react-router-dom";

export default function CategoryCard({ category }: CategoryProps) {
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
