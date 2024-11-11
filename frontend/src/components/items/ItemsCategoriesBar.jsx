import PropTypes from "prop-types";
import "../../styles/components/items-categories-bar.scss";
const ItemsCategoriesBar = ({ categories }) => {
  if (categories.length === 0) {
    return (
      <nav className="categories-nav">
        <ul className="categories-list">
          <li className="category-item">
            <span className="category-text">
              No existen categorias disponibles
            </span>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="categories-nav">
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={category} className="category-item">
            <span className="category-text">{category}</span>
            {index < categories.length - 1 && (
              <span className="separator">›</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

ItemsCategoriesBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ItemsCategoriesBar;
