import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ShopByCut from "../../components/shop-by-cut/shop-by-cut";
import { ProductsProvider } from "../../context/products.context";

describe("<ShopByCut />", () => {
  test("renders all cut links dynamically", () => {
    render(
      <MemoryRouter>
        <ProductsProvider>
          <ShopByCut />
        </ProductsProvider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("shop-by-cut-section")).toBeInTheDocument();

    const shapes = ["oval", "cushion", "round"];

    shapes.forEach((shape) => {
      const link = screen.getByRole("link", { name: new RegExp(shape, "i") });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/shop/engagement?shape=${shape}`);
    });

    const cta = screen.getByRole("link", { name: /speak to an expert/i });
    expect(cta).toHaveAttribute("href", "/book-an-appointment");
  });
});
