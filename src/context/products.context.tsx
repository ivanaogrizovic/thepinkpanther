import { createContext, useContext } from "react";
import { engagementRing } from "../interfaces/engagementRing.interface";
import PRODUCTS from "../engagement-rings.json";

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type ProductsContextInterface = {
  products: engagementRing[];
  getUniqueValues: <K extends StringKeys<engagementRing>>(key: K) => string[];
};

export const ProductsContext = createContext<ProductsContextInterface>({
  products: [],
  getUniqueValues: () => [],
});

export const ProductsProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const getUniqueValues = <K extends StringKeys<engagementRing>>(key: K) => {
    return [...new Set(PRODUCTS.map((product) => product[key]))];
  };

  return (
    <ProductsContext.Provider value={{ products: PRODUCTS, getUniqueValues }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error(
      "useProductsContext must be used within a ProductsProvider",
    );
  return context;
};
