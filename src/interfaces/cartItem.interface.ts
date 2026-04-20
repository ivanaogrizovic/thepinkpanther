import { EngagementRing } from "./engagementRing.interface";

export interface CartItem {
  product: EngagementRing;
  quantity: number;
}

export interface CartState {
  items: Record<number, CartItem>;
}

export type CartAction =
  | {
      type: "ADD_ITEM";
      product: EngagementRing;
    }
  | {
      type: "DECREASE_QUANTITY";
      productId: number;
    }
  | {
      type: "REMOVE_ITEM";
      productId: number;
    }
  | {
      type: "CLEAR_CART";
    };
