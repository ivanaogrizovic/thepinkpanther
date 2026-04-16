import { useEffect } from "react";
import { engagementRing } from "../interfaces/engagementRing.interface";
import { useFilters } from "../hooks/useFilters";
import { useLocation } from "react-router";
import ItemsGrid from "../components/items-grid/items-grid";
import Filters from "../components/filters/filters";
import Header from "../components/header/header";

export default function Shop({
  productList,
}: {
  productList: engagementRing[];
}) {
  const location = useLocation();
  const productsFromComponent = location.state as engagementRing[] | undefined;
  const baseList = productsFromComponent ?? productList ?? [];

  const { filters, toggleFilter, filteredProductList } = useFilters(baseList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="-fade-in">
      <Header />
      <div className="-accent">
        <div className="pinkpanther-shop-content" role="complementary">
          <Filters selectedFilters={filters} onToggle={toggleFilter} />
          <ItemsGrid rings={filteredProductList} />
        </div>
      </div>
    </div>
  );
}
