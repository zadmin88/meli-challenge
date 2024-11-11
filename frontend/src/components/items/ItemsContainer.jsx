import ItemSearchCard from "./ItemSearchCard";
import PropTypes from "prop-types";
import "../../styles/components/items-container.scss";

const ItemsContainer = ({ items }) => {
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
