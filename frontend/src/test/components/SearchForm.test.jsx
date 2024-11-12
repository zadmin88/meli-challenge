import { render, screen } from "../utils/test-utils";
import { describe, it, expect } from "vitest";
import SearchForm from "../../components/forms/SearchForm";

describe("SearchForm", () => {
  it("Debe renderizar un input", () => {
    render(<SearchForm />);
    const searchInput = screen.getByTestId("search-input");

    expect(searchInput).toBeInTheDocument();
  });

  it("Debe renderizar un botón", () => {
    render(<SearchForm />);
    const searchButton = screen.getByTestId("search-button");

    expect(searchButton).toBeInTheDocument();
  });

  it("Debe renderizar un placeholder", () => {
    render(<SearchForm />);
    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");

    expect(searchInput).toBeInTheDocument();
  });

  it("Debe enfocarse si el usuario hace click en el botón y el input está vacío", () => {
    render(<SearchForm />);
    const searchButton = screen.getByTestId("search-button");
    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");

    searchButton.click();
    expect(searchInput).toHaveFocus();
  });

  it("No debe limpiar el input si el usuario hace click en el botón", () => {
    render(<SearchForm />);
    const searchButton = screen.getByTestId("search-button");
    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");

    searchInput.value = "test";
    searchButton.click();

    expect(searchInput).toHaveValue("test");
  });
});
