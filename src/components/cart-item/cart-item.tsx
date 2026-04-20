import { EngagementRing } from "../../interfaces/engagementRing.interface";
import "./cart-item.scss";

export default function CartItem({ product, quantity }: any) {
  return (
    <>
      <li key={product.id} className="pinkpanther-cart-list-item">
        <div>
          <img
            src={product.images[0]}
            className="pinkpanther-cart-item-image"
          />
        </div>
        <div className="pinkpanther-cart-item-text">
          <p className="-bold">{product.name}</p>
          <p>Price: £{product.price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </li>
    </>
  );
}
