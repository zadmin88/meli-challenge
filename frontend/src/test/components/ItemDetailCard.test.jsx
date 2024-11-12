import { render, screen } from "../utils/test-utils";
import { describe, it, expect } from "vitest";
import ItemDetailCard from "../../components/items/ItemDetailCard";

describe("SearchForm", () => {
  const item = {
    id: 1,
    title: "mock title",
    price: {
      currency: "ARS",
      amount: 1000,
      decimals: 0,
    },
    picture: "mock picture",
    condition: "new",
    free_shipping: true,
    location: "mock location",
    sold_quantity: 10,
    description: "mock description",
  };

  it("Debe renderizar el precio", () => {
    render(<ItemDetailCard item={item} />);
    const itemPrice = screen.getByTestId("item-price");

    expect(itemPrice).toBeInTheDocument();
  });

  it("Debe renderizar el titulo", () => {
    render(<ItemDetailCard item={item} />);
    const itemtitle = screen.getByTestId("item-title");
    expect(itemtitle).toBeInTheDocument();
  });

  it("Debe renderizar la informacion de ventas y estado", () => {
    render(<ItemDetailCard item={item} />);
    const itemSalesInfo = screen.getByTestId("item-sales-info");
    const itemCondition = screen.getByText("Nuevo - 10 vendidos");
    expect(itemSalesInfo).toBeInTheDocument();
    expect(itemCondition).toBeInTheDocument();
  });

  it("Debe renderizar el boton de comprar", () => {
    render(<ItemDetailCard item={item} />);
    const itemButton = screen.getByTestId("item-button");
    expect(itemButton).toBeInTheDocument();
  });

  it("Debe renderizar la descripcion", () => {
    render(<ItemDetailCard item={item} />);
    const itemdescription = screen.getByTestId("item-description");
    expect(itemdescription).toBeInTheDocument();
  });
});
