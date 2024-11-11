import ItemsContainer from "../components/items/ItemsContainer";
import ItemsCategoriesBar from "../components/items/ItemsCategoriesBar";
import "../styles/pages/items-list-page.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ItemList = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState({ categories: [], items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchQuery = searchParams.get("search") || "";
        const response = await fetch(
          `http://localhost:3000/api/items?search=${encodeURIComponent(searchQuery)}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const responseData = await response.json();

        setData(responseData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [searchParams]); // Re-fetch when search params change

  if (isLoading) {
    return (
      <div className="items-list-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="items-list-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }
  return (
    <div className="items-list-container">
      <ItemsCategoriesBar categories={data.categories} />
      <ItemsContainer items={data.items} />
    </div>
  );
};

export default ItemList;
