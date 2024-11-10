import ItemsCategoriesBar from "../components/items/ItemsCategoriesBar";
import ItemDetailCard from "../components/items/ItemDetailCard";

const response = {
  author: {
    name: "test",
    lastname: "franco",
  },
  categories: ["All", "Clothes", "Shoes"],
  item: {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum?",
    price: {
      currency: "ARS",
      amount: 10000,
      decimals: 23,
    },
    picture: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`,
    condition: "nuevo",
    free_shipping: true,
    sold_quantity: 14,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum? ",
  },
};

const ItemDetail = () => {
  return (
    <div className="items-list-container">
      <ItemsCategoriesBar categories={response.categories} />
      <ItemDetailCard item={response.item} />
    </div>
  );
};

export default ItemDetail;
