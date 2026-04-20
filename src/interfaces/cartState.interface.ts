import { CartItem } from "./cartItem.interface";

export interface CartState {
  items: Record<string, CartItem>;
}
