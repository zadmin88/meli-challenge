import { render, screen } from "../utils/test-utils";
import { describe, it, expect } from "vitest";
import ItemSearchCard from "../../components/items/ItemSearchCard";

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
    render(<ItemSearchCard item={item} />);
    const itemPrice = screen.getByTestId("item-price");

    expect(itemPrice).toBeInTheDocument();
  });

  it("Debe renderizar la imagen de envio gratis si la propiedad free_shipping es true", () => {
    render(<ItemSearchCard item={item} />);
    const itemFreeShipping = screen.getByTestId("item-free-shipping");
    expect(itemFreeShipping).toBeInTheDocument();
  });

  it("Debe renderizar la ciudad", () => {
    render(<ItemSearchCard item={item} />);
    const itemCity = screen.getByTestId("item-city");
    expect(itemCity).toBeInTheDocument();
  });

  it("Debe renderizar el titulo", () => {
    render(<ItemSearchCard item={item} />);
    const itemtitle = screen.getByTestId("item-title");
    expect(itemtitle).toBeInTheDocument();
  });
});
