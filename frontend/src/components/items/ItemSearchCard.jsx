import "../../styles/components/item-search-card.scss";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/utils";
import FreeShipping from "../../assets/logos/ic_shipping@2x.png.png";
import { useNavigate } from "react-router-dom";

function ItemSearchCard({ item }) {
  const navigate = useNavigate();
  return (
    <div
      className="item-search-card"
      onClick={() => navigate(`/items/${item.id}`)}
    >
      <img src={item.picture} alt={item.title} className="item-image" />
      <div className="item-info">
        <div className="item-details">
          <h2 className="item-price">
            {formatCurrency(item.price.amount, item.price.currency)}
            <span>
              {item.free_shipping && (
                <img
                  src={FreeShipping}
                  alt="Envio Gratis"
                  width={20}
                  height={20}
                ></img>
              )}
            </span>
          </h2>
          <span className="item-city">{"argentina"}</span>
        </div>
        <p className="item-title">{item.title}</p>
      </div>
    </div>
  );
}

ItemSearchCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemSearchCard;
