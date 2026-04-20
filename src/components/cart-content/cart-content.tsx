import { useCart } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item";
import "./cart-content.scss";

export default function CartContent() {
  const { state, totalPrice } = useCart();
  const items = Object.values(state.items);

  return (
    <div className="pinkpanther-cart-content -accent">
      <h2>Total: £{totalPrice}</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="pinkpanther-cart-list">
          {items.map(({ product, quantity }) => (
            <CartItem product={product} quantity={quantity} />
          ))}
        </ul>
      )}
    </div>
  );
}
