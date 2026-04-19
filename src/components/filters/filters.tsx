import { useContext, useMemo, useState } from "react";
import { ProductsContext } from "../../context/products.context";
import { FiltersState } from "../../hooks/useFilters";
import { motion, AnimatePresence, Variants } from "framer-motion";
import FilterCheckboxList from "./filter-checkbox/filter-checkbox";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import "./filters.scss";

type FilterCategory = "shape" | "style" | "metal";

interface FiltersProps {
  selectedFilters: FiltersState;
  onToggle: (category: FilterCategory, value: string) => void;
}

const FILTER_CATEGORIES: FilterCategory[] = ["shape", "style", "metal"];

const panel: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Filters({ selectedFilters, onToggle }: FiltersProps) {
  const { getUniqueValues } = useContext(ProductsContext);
  const [isOpen, setIsOpen] = useState(false);

  const filtersMap = useMemo(() => {
    return FILTER_CATEGORIES.reduce<Record<FilterCategory, string[]>>(
      (acc, category) => {
        acc[category] = getUniqueValues(category);
        return acc;
      },
      {} as Record<FilterCategory, string[]>,
    );
  }, [getUniqueValues]);

  return (
    <div className="pinkpanther-filters">
      <button
        className="pinkpanther-filter-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        Filter by{" "}
        {isOpen ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="pinkpanther-filter-panel"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="pinkpanther-filter-panel">
              {FILTER_CATEGORIES.map((category) => (
                <FilterCheckboxList
                  key={category}
                  filterName={category}
                  filterList={filtersMap[category]}
                  isChecked={(value) => selectedFilters[category].has(value)}
                  onToggle={(value) => onToggle(category, value)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
