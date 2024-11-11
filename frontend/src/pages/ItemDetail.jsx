import ItemsCategoriesBar from "../components/items/ItemsCategoriesBar";
import ItemDetailCard from "../components/items/ItemDetailCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoItemsCard from "../components/items/NoItemsCard";
import ItemDetailSkeleton from "../components/skeletons/ItemDetailSkeleton";

const ItemDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3000/api/items/${id}`);

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
  }, [id]);

  if (isLoading) {
    return (
      <div className="items-list-container">
        <ItemDetailSkeleton />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="items-list-container">
        <NoItemsCard />
      </div>
    );
  }

  return (
    <div className="items-list-container">
      <ItemsCategoriesBar categories={data.categories} />
      <ItemDetailCard item={data.item} />
    </div>
  );
};

export default ItemDetail;
