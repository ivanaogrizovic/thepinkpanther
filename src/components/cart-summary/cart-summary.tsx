import Button from "../button/button";
import "./cart-summary.scss";

interface CartSummaryProps {
  total: number;
  quantity: number;
  setCheckedOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartSummary({
  total,
  quantity,
  setCheckedOut,
}: CartSummaryProps) {
  return (
    <div className="pinkpanther-cart-summary">
      <h3 className="pinkpanther-cart-summary-title">Order summary</h3>
      <div className="pinkpanther-cart-summry-total">
        <p className="pinkpanther-cart-summary-label">Item Quantity: </p>
        <p className="pinkpanther-cart-summary-total -bold">{quantity}</p>
        <p className="pinkpanther-cart-summary-label">Delivery: </p>
        <p className="pinkpanther-cart-summary-total -bold">FREE</p>
        <p className="pinkpanther-cart-summary-label">Total: </p>
        <p className="pinkpanther-cart-summary-total -bold">£{total}</p>
      </div>
      <Button theme="tertiary" onClick={() => setCheckedOut(true)}>
        Checkout
      </Button>
    </div>
  );
}
