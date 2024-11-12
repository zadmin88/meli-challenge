import "../../styles/components/no-items-card.scss";

const NoItemsCard = () => {
  return (
    <div className="no-items-card" data-testid="no-items-card">
      <p>No se encontraron productos que coincidan con la búsqueda</p>
    </div>
  );
};

export default NoItemsCard;
