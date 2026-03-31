import { useEffect } from "react";
import { engagementRing } from "../interfaces/engagementRing.interface";
import ItemsGrid from "../components/items-grid/items-grid";
import Filters from "../components/filters/filters";
import engagementHero2 from ".././assets/engagement-set.webp";
import Hero from "../components/hero/hero";
import { useFilters } from "../hooks/useFilters";
import { useLocation } from "react-router-dom";

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
      <Hero text="Engagement Rings" image={engagementHero2} />
      <div
        className="pinkpanther-shop-content"
        role="complementary"
        aria-label="Shop filters and products"
      >
        <Filters selectedFilters={filters} onToggle={toggleFilter} />
        <ItemsGrid rings={filteredProductList} />
      </div>
    </div>
  );
}
