import { render, screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../../App";

describe("App", () => {
  it("should render", async () => {
    render(<App />);
    const app = await screen.findByText("Hello");
    expect(app).toBeInTheDocument();
  });
});
