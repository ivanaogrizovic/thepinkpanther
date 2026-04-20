import { CartAction, CartState } from "../interfaces/cartItem.interface";

export const initialCartState: CartState = {
  items: {},
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const id = action.product.id;
      const existing = state.items[id];

      const updatedItem = existing
        ? {
            ...existing,
            quantity: existing.quantity + 1,
          }
        : {
            product: action.product,
            quantity: 1,
          };

      return {
        ...state,
        items: {
          ...state.items,
          [id]: updatedItem,
        },
      };
    }

    case "DECREASE_QUANTITY": {
      const item = state.items[action.productId];
      if (!item) return state;

      const newQty = item.quantity - 1;

      if (newQty <= 0) {
        const { [action.productId]: _, ...rest } = state.items;
        return {
          ...state,
          items: rest,
        };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [action.productId]: {
            ...item,
            quantity: newQty,
          },
        },
      };
    }

    case "REMOVE_ITEM": {
      const { [action.productId]: _, ...rest } = state.items;
      return {
        ...state,
        items: rest,
      };
    }

    case "CLEAR_CART":
      return initialCartState;

    default: {
      const _exhaustiveCheck: never = action;
      return state;
    }
  }
}
