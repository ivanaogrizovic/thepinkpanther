import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useMemo,
} from "react";
import { cartReducer, initialCartState } from "./cart.reducer";
import {
  CartAction,
  CartState,
  CartItem,
} from "../interfaces/cartItem.interface";
import { EngagementRing } from "../interfaces/engagementRing.interface";

type CartContextType = {
  state: CartState;
  addItem: (product: EngagementRing) => void;
  decreaseQuantity: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (product: EngagementRing) => {
    dispatch({ type: "ADD_ITEM", product });
  };

  const decreaseQuantity = (productId: number) => {
    dispatch({ type: "DECREASE_QUANTITY", productId });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalItems = useMemo(() => {
    return Object.values(state.items).reduce(
      (sum, item) => sum + item.quantity,
      0,
    );
  }, [state.items]);

  const totalPrice = useMemo(() => {
    return Object.values(state.items).reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  }, [state.items]);

  const value = useMemo(
    () => ({
      state,
      addItem,
      decreaseQuantity,
      removeItem,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [state, totalItems, totalPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
