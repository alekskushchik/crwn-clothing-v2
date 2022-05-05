import "./categories.styles.scss";
import { categories } from "../../categories-data";
import CategoryItem from "../category-item/category-item.component";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
