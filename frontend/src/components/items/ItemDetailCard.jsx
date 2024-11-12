import PropTypes from "prop-types";
import "../../styles/components/item-detail-card.scss";
import { formatCurrency } from "../../utils/utils";

const ItemDetailCard = ({ item }) => {
  return (
    <div className="item-detail-card">
      <div className="item-details">
        <img
          src={item.picture}
          alt={item.title}
          className="item-image"
          data-testid="item-image"
        />
        <div className="item-info">
          <div>
            <p className="sales-info" data-testid="item-sales-info">
              {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
              {item.sold_quantity} vendidos
            </p>
          </div>
          <h2 className="item-title" data-testid="item-title">
            {item.title}
          </h2>

          <div className="item-price" data-testid="item-price">
            <span className="item-price-value">
              {formatCurrency(item.price.amount, item.price.currency)}
            </span>
          </div>
          <button className="item-button" data-testid="item-button">
            Comprar
          </button>
        </div>
      </div>
      <div className="item-description" data-testid="item-description">
        <h3>Descripción del producto</h3>
        <p>{item.description || "Sin descripción"}</p>
      </div>
    </div>
  );
};

ItemDetailCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetailCard;
