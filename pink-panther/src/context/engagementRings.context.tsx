import { createContext } from 'react';
import { useState } from 'react';
import { engagementRing } from '../interfaces/engagementRing.interface';

import PRODUCTS from '../engagement-rings.json';

export const ProductsContext = createContext({
  products: []
});

export const ProductsProvider = ({ children }: { children?: React.ReactNode }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products }
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}