import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { EngagementRing } from "../interfaces/engagementRing.interface";

type FilterCategory = "shape" | "style" | "metal";
export type FiltersState = Record<FilterCategory, Set<string>>;

// Custom hook for managing product filters
export function useFilters(productList: EngagementRing[]) {
  const location = useLocation();

  const [filters, setFilters] = useState<FiltersState>(() => ({
    shape: new Set(),
    style: new Set(),
    metal: new Set(),
  }));

  const toggleFilter = useCallback(
    (category: FilterCategory, value: string) => {
      setFilters((prev) => {
        const next = {
          shape: new Set(prev.shape),
          style: new Set(prev.style),
          metal: new Set(prev.metal),
        };
        const setForCategory = next[category];
        if (setForCategory.has(value)) setForCategory.delete(value);
        else setForCategory.add(value);
        return next;
      });
    },
    [],
  );

  // Sync with URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nextFilters: FiltersState = {
      shape: new Set(),
      style: new Set(),
      metal: new Set(),
    };

    ["shape", "style", "metal"].forEach((category) => {
      const value = params.get(category);
      if (value)
        value
          .split(",")
          .forEach((v) => nextFilters[category as FilterCategory].add(v));
    });

    setFilters(nextFilters);
  }, [location.search]);

  const sortByName = (data: EngagementRing[]) =>
    [...data].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
    );

  const filteredProductList = useMemo(() => {
    const hasAnyFilter =
      filters.shape.size > 0 ||
      filters.style.size > 0 ||
      filters.metal.size > 0;

    if (!hasAnyFilter) return sortByName(productList);

    return sortByName(
      productList.filter((item) => {
        const shapeOk =
          filters.shape.size === 0 || filters.shape.has(item.shape);
        const styleOk =
          filters.style.size === 0 || filters.style.has(item.style);
        const metalOk =
          filters.metal.size === 0 || filters.metal.has(item.metal);
        return shapeOk && styleOk && metalOk;
      }),
    );
  }, [productList, filters]);

  return { filters, toggleFilter, filteredProductList };
}
