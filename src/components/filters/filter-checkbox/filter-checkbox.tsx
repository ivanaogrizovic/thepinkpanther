import React, { useState, memo } from "react";
import { filter as FilterItem } from "../../../interfaces/filters.interface";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "../filters";

interface FilterCheckboxListProps {
  filterName: string;
  filterList: FilterItem[];
  isChecked: (value: string) => boolean;
  onToggle: (value: string) => void;
}

function FilterCheckboxListComponent({
  filterName,
  filterList,
  isChecked,
  onToggle,
}: FilterCheckboxListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="pinkpanther-filter-container"
      role="region"
      aria-label={`Filter by ${filterName}`}
    >
      <button
        className="pinkpanther-filter-accordion -microcopy -bold"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`filter-${filterName}-list`}
      >
        {filterName}
        {isOpen ? <FaChevronRight /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <ul
          className="pinkpanther-filter-list -fade-in"
          id={`filter-${filterName}-list`}
          role="list"
        >
          {filterList?.map((filter, index) => (
            <li key={index} role="listitem">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked(filter)}
                  onChange={() => onToggle(filter)}
                />
                {filter}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(FilterCheckboxListComponent);
