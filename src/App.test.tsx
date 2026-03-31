import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ProductsProvider } from "./context/products.context";
import App from "./App";

test("renders navigation and home page", () => {
  render(
    <MemoryRouter>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </MemoryRouter>,
  );
});
