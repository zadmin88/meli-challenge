import ItemsCategoriesBar from "../components/items/ItemsCategoriesBar";
import ItemDetailCard from "../components/items/ItemDetailCard";

import { useParams } from "react-router-dom";
import NoItemsCard from "../components/items/NoItemsCard";
import ItemDetailSkeleton from "../components/skeletons/ItemDetailSkeleton";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../services/getItemById";

const ItemDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItemById(id),
  });

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
    <div className="items-list-container" data-testid="item-detail-container">
      <Helmet data-testid="item-detail-helmet">
        <title>{`${data.item.title} - Mercado Libre`}</title>
        <meta name="description" content={`${data.item.title}`} />
      </Helmet>
      <ItemsCategoriesBar categories={data.categories} />
      <ItemDetailCard item={data.item} />
    </div>
  );
};

export default ItemDetail;
