import { render, screen } from "@testing-library/react";
import Navigation from "../components/navbar/navbar";
import { ProductsProvider } from "../context/products.context";
import { BrowserRouter } from "react-router-dom";

describe("Navigation", () => {
  it("renders the nav after page load", () => {
    render(
      <ProductsProvider>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ProductsProvider>,
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });
});
