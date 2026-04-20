import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import "./cart-empty.scss";

export default function CartEmpty() {
  return (
    <div className="pinkpanther-cart-empty">
      <h2>Cart empty</h2>
      <p>Please add some products to your basked and then return</p>
      <Link
        to={ROUTES.SHOP.ENGAGEMENT}
        rel="noopener noreferrer"
        className="pinkpanther-cta-link"
      >
        Shop our engagement rings →
      </Link>
    </div>
  );
}
