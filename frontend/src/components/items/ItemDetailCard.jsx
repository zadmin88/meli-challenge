import PropTypes from "prop-types";
import "../../styles/components/item-detail-card.scss";
import { formatCurrency } from "../../utils/utils";

const ItemDetailCard = ({ item }) => {
  return (
    <div className="item-detail-card">
      <div className="item-details">
        <img src={item.picture} alt={item.title} className="item-image" />
        <div className="item-info">
          <div>
            <p className="sales-info">
              {item.condition} - {item.sold_quantity} vendidos
            </p>
          </div>
          <h2 className="item-title">{item.title}</h2>

          <div className="item-price">
            <span className="item-price-value">
              {formatCurrency(item.price.amount, item.price.currency)}
            </span>
            {/* <span>{item.price.decimals}</span> */}
          </div>
          <button className="item-button">Comprar</button>
        </div>
      </div>
      <div className="item-description">
        <h3>Descripción del producto</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

ItemDetailCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetailCard;