import { useLocation } from "react-router";
import { engagementRing } from "../interfaces/engagementRing.interface";
import ItemDetail from "../components/item-detail/item-detail";
import Header from "../components/header/header";

export default function Product() {
  const location = useLocation();
  const productDetail: engagementRing = location.state[0];

  return (
    <div aria-label="Product details">
      <Header
        text={`${productDetail.origin} diamond`}
        title={productDetail.name}
      />
      <ItemDetail singleProduct={productDetail}></ItemDetail>
    </div>
  );
}
