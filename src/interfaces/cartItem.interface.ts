import { EngagementRing } from "./engagementRing.interface";

export interface CartItem {
  product: EngagementRing;
  quantity: number;
}

export interface CartState {
  items: Record<string, CartItem>;
}

export type CartAction =
  | { type: "ADD_ITEM"; product: EngagementRing }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "DECREASE_QUANTITY"; productId: string }
  | { type: "CLEAR_CART" };
