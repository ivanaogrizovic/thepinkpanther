import { useLocation } from "react-router";
import ItemDetail from "../components/item-detail/item-detail";
import { engagementRing } from "../interfaces/engagementRing.interface";

export default function Product() {
  const location = useLocation();
  const productDetail: engagementRing = location.state[0];

  console.log(productDetail);

  return (
    <div aria-label="Product details">
      <ItemDetail singleProduct={productDetail}></ItemDetail>
    </div>
  );
}
