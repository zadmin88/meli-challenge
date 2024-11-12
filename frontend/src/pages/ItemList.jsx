import ItemsContainer from "../components/items/ItemsContainer";
import ItemsCategoriesBar from "../components/items/ItemsCategoriesBar";
import "../styles/pages/items-list-page.scss";
import { useSearchParams } from "react-router-dom";
import PageSkeleton from "../components/skeletons/PageSkeleton";
import NoItemsCard from "../components/items/NoItemsCard";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/getItems";

const ItemList = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["items", searchQuery],
    queryFn: () => getItems(searchQuery),
  });

  if (isLoading) {
    return (
      <div className="items-list-container">
        <PageSkeleton />
      </div>
    );
  }

  if (error || data.items.length === 0) {
    return (
      <div className="items-list-container">
        <NoItemsCard />
      </div>
    );
  }
  return (
    <div className="items-list-container">
      <Helmet data-testid="helmet">
        <title>
          {(searchParams.get("search") &&
            ` ${searchParams.get("search")} Mercado Libre`) ||
            "Meli Challenge"}
        </title>
        <meta
          name="description"
          content={
            searchParams.get("search")
              ? `Resultados de búsqueda para ${searchParams.get("search")}`
              : "Meli Challenge"
          }
        />
      </Helmet>
      <ItemsCategoriesBar categories={data.categories} />
      <ItemsContainer items={data.items} />
    </div>
  );
};

export default ItemList;
