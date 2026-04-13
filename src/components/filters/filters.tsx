import { useContext, useMemo } from "react";
import { ProductsContext } from "../../context/products.context";
import { FiltersState } from "../../hooks/useFilters";
import FilterCheckboxList from "./filter-checkbox/filter-checkbox";
import "./filters.scss";

type FilterCategory = "shape" | "style" | "metal";

interface FiltersProps {
  selectedFilters: FiltersState;
  onToggle: (category: FilterCategory, value: string) => void;
}

export default function Filters({ selectedFilters, onToggle }: FiltersProps) {
  const { getUniqueValues } = useContext(ProductsContext);

  const shapeFilters = useMemo(
    () => getUniqueValues("shape"),
    [getUniqueValues],
  );
  const metalFilters = useMemo(
    () => getUniqueValues("metal"),
    [getUniqueValues],
  );
  const styleFilters = useMemo(
    () => getUniqueValues("style"),
    [getUniqueValues],
  );

  return (
    <div className="pinkpanther-filters">
      <FilterCheckboxList
        filterName="shape"
        filterList={shapeFilters}
        isChecked={(value) => selectedFilters.shape.has(value)}
        onToggle={(value) => onToggle("shape", value)}
      />

      <FilterCheckboxList
        filterName="style"
        filterList={styleFilters}
        isChecked={(value) => selectedFilters.style.has(value)}
        onToggle={(value) => onToggle("style", value)}
      />

      <FilterCheckboxList
        filterName="metal"
        filterList={metalFilters}
        isChecked={(value) => selectedFilters.metal.has(value)}
        onToggle={(value) => onToggle("metal", value)}
      />
    </div>
  );
}
