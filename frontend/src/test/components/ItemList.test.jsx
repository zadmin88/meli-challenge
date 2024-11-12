/* eslint-disable react/prop-types */
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, useSearchParams } from "react-router-dom";
import { vi, describe, it, beforeEach, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import ItemList from "../../pages/ItemList";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useSearchParams: vi.fn(),
  };
});

vi.mock("./PageSkeleton", () => ({
  default: () => <div data-testid="page-skeleton">Loading...</div>,
}));

vi.mock("./NoItemsCard", () => ({
  default: () => <div data-testid="no-items-card">No items found</div>,
}));

vi.mock("./ItemsCategoriesBar", () => ({
  default: ({ categories }) => (
    <div data-testid="categories-nav">{categories.join(", ")}</div>
  ),
}));

vi.mock("./ItemsContainer", () => ({
  default: ({ items }) => (
    <div data-testid="items-list-container">
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  ),
}));

describe("ItemList", () => {
  const mockSearchParams = new URLSearchParams();
  const mockSetSearchParams = vi.fn();

  // Create fetch mock
  const fetchMock = vi.fn();
  const helmetContext = {};

  const Wrapper = ({ children }) => (
    <HelmetProvider context={helmetContext}>
      <MemoryRouter>{children}</MemoryRouter>
    </HelmetProvider>
  );

  beforeEach(() => {
    vi.clearAllMocks();
    // Setup fetch mock for the window object
    window.fetch = fetchMock;
    // Default mock for useSearchParams
    useSearchParams.mockReturnValue([mockSearchParams, mockSetSearchParams]);
  });

  it("Debe renderizar el skeleton al iniciar", () => {
    render(
      <MemoryRouter>
        <ItemList />
      </MemoryRouter>
    );

    expect(screen.getByTestId("page-skeleton")).toBeInTheDocument();
  });

  it("Debe Renderizar la lista de items cuanto se resuelve la promesa", async () => {
    const mockData = {
      categories: ["Category 1", "Category 2"],
      items: [
        { id: 1, title: "Item 1", price: { currency: "ARS", amount: 1000 } },
        { id: 2, title: "Item 2", price: { currency: "ARS", amount: 1000 } },
      ],
    };

    window.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<ItemList />, { wrapper: Wrapper });

    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.queryByTestId("page-skeleton")).not.toBeInTheDocument();
    });

    expect(screen.getByTestId("items-list-container")).toHaveTextContent(
      "Item 1"
    );
    expect(screen.getByTestId("items-list-container")).toHaveTextContent(
      "Item 2"
    );
  });

  it("Debe renderizar el no items card cuando no hay items", async () => {
    const mockData = {
      categories: [],
      items: [],
    };

    window.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(
      <MemoryRouter>
        <ItemList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("no-items-card")).toBeInTheDocument();
    });
  });

  it("Debe renderizar el no items card cuando la petición falla", async () => {
    window.fetch = vi.fn().mockRejectedValueOnce(new Error("Fetch failed"));

    render(
      <MemoryRouter>
        <ItemList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("no-items-card")).toBeInTheDocument();
    });
  });

  it("Debe realizar la petición con los parámetros de búsqueda", async () => {
    const mockSearchParams = new URLSearchParams("?search=test query");
    useSearchParams.mockReturnValue([mockSearchParams, mockSetSearchParams]);

    const mockData = {
      categories: [],
      items: [],
    };

    window.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(
      <MemoryRouter>
        <ItemList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledWith(
        "http://localhost:3000/api/items?search=test%20query"
      );
    });
  });
});
