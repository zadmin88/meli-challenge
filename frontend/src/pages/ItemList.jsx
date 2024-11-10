import ItemsContainer from "../components/items/ItemsContainer";
import ItemsCategoriesBar from "../components/items/ItemsCategoriesBar";
import "../styles/pages/items-list-page.scss";

const response = {
  items: [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum? consectetur adipisicing elit. Nulla, laborum?",
      price: {
        currency: "ARS",
        amount: 10000,
        decimals: 23,
      },
      picture: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`,
      condition: true,
      free_shipping: true,
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum?",
      price: {
        currency: "ARS",
        amount: 10000,
        decimals: 23,
      },
      picture: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`,
      condition: true,
      free_shipping: false,
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum?",
      price: {
        currency: "ARS",
        amount: 10000,
        decimals: 23,
      },
      picture: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`,
      condition: true,
      free_shipping: true,
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laborum?",
      price: {
        currency: "ARS",
        amount: 10000,
        decimals: 23,
      },
      picture: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`,
      condition: true,
      free_shipping: false,
    },
  ],
  categories: ["All", "Clothes", "Shoes"],
};
const ItemList = () => {
  return (
    <div className="items-list-container">
      <ItemsCategoriesBar categories={response.categories} />
      <ItemsContainer items={response.items} />
    </div>
  );
};

export default ItemList;
