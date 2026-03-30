import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import FilterCheckboxList from "./filter-checkbox/filter-checkbox";
import "./filters.scss";

type FilterCategory = "shape" | "style" | "metal";
type FiltersState = Record<FilterCategory, Set<string>>;

interface FiltersProps {
  selectedFilters: FiltersState;
  onToggle: (category: FilterCategory, value: string) => void;
}

export default function Filters({ selectedFilters, onToggle }: FiltersProps) {
  const { getUniqueValues } = useContext(ProductsContext);
  const shapeFilters = getUniqueValues("shape");
  const metalFilters = getUniqueValues("metal");
  const styleFilters = getUniqueValues("style");

  return (
    <div className="pinkpanther-filters">
      <p className="h4">Filter by</p>

      <FilterCheckboxList
        filterName="shape"
        filterList={shapeFilters}
        isChecked={(value: string) => selectedFilters.shape.has(value)}
        onToggle={(value: string) => onToggle("shape", value)}
      />

      <FilterCheckboxList
        filterName="style"
        filterList={styleFilters}
        isChecked={(value: string) => selectedFilters.style.has(value)}
        onToggle={(value: string) => onToggle("style", value)}
      />

      <FilterCheckboxList
        filterName="metal"
        filterList={metalFilters}
        isChecked={(value: string) => selectedFilters.metal.has(value)}
        onToggle={(value: string) => onToggle("metal", value)}
      />
    </div>
  );
}
