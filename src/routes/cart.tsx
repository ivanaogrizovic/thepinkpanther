import CartContent from "../components/cart-content/cart-content";
import Header from "../components/header/header";

export default function Cart() {
  return (
    <div className="pinkpanther-cart-container">
      <Header text="" title="Your cart" />
      <CartContent />
    </div>
  );
}
