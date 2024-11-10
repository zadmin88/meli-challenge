import ItemSearchCard from "./ItemSearchCard";
import PropTypes from "prop-types";
import "../../styles/components/items-container.scss";

const ItemsContainer = ({ items }) => {
  if (items.length === 0) {
    return <p>No items found</p>;
  }
  return (
    <div className="items-container">
      {items.map((item) => (
        <ItemSearchCard key={item.id} item={item} />
      ))}
    </div>
  );
};

ItemsContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemsContainer;
