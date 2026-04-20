import { useEffect } from "react";
import { useLocation } from "react-router";
import { useFilters } from "../hooks/useFilters";
import { EngagementRing } from "../interfaces/engagementRing.interface";
import { motion } from "framer-motion";
import ItemsGrid from "../components/items-grid/items-grid";
import Filters from "../components/filters/filters";
import Header from "../components/header/header";

export default function Shop({
  productList,
}: {
  productList: EngagementRing[];
}) {
  const location = useLocation();
  const productsFromComponent = location.state as EngagementRing[] | undefined;
  const baseList = productsFromComponent ?? productList ?? [];

  const { filters, toggleFilter, filteredProductList } = useFilters(baseList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="shop-page">
      <Header text="The bridal edit" title="Engagement ring collection" />
      <div className="-accent">
        <div className="pinkpanther-shop-content" role="complementary">
          <Filters selectedFilters={filters} onToggle={toggleFilter} />
          <ItemsGrid rings={filteredProductList} />
        </div>
      </div>
    </div>
  );
}
