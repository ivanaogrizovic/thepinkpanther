import { createContext } from 'react';
import { useState } from 'react';
import { engagementRing } from '../interfaces/engagementRing.interface';

import PRODUCTS from '../engagement-rings.json';

type ProductsContextInterface = {
  products: engagementRing[];
};

export const ProductsContext = createContext<ProductsContextInterface>({
  products: [],
});

export const ProductsProvider = ({ children }: { children?: React.ReactNode }) => {
  const [productList] = useState(PRODUCTS);
  return (
    <ProductsContext.Provider value={{ 'products': productList }}>{children}</ProductsContext.Provider>
  )
}