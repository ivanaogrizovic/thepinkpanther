import { render, screen } from "@testing-library/react";
import Home from "../routes/home";
import { MemoryRouter } from "react-router";

describe("Homepage", () => {
  test("Renders all key sections", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const keySections = [
      "hero-section",
      "shop-by-cut-section",
      "shop-by-occasion-section",
      "full-width-cta",
    ];

    keySections.forEach((section) => {
      expect(screen.getByTestId(section)).toBeInTheDocument();
    });
  });
});
