import { useState } from "react";
import { useCart } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item";
import CartSummary from "../cart-summary/cart-summary";
import "./cart-content.scss";
import CheckedOut from "../checked-out/checked-out";

export default function CartContent() {
  const { state, totalPrice } = useCart();
  const items = Object.values(state.items);
  const [checkedOut, setCheckedOut] = useState(false);

  return (
    <div className="pinkpanther-cart-content-wrapper -accent">
      {items.length === 0 && <p>Cart empty</p>}
      {!checkedOut && items.length > 0 && (
        <>
          <h2>Total: £{totalPrice}</h2>
          <div className="pinkpanther-cart-content">
            <ul className="pinkpanther-cart-list">
              {items.map(({ product, quantity }) => (
                <CartItem product={product} quantity={quantity} />
              ))}
            </ul>
            <CartSummary
              total={totalPrice}
              quantity={items.length}
              setCheckedOut={setCheckedOut}
            />
          </div>
        </>
      )}
      {checkedOut && <CheckedOut />}
    </div>
  );
}
