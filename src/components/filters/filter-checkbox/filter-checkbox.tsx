import React, { useState, memo } from "react";
import { filter as FilterItem } from "../../../interfaces/filters.interface";
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
    <div className="pinkpanther-filter">
      <button
        className="pinkpanther-filter-accordion"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={`filter-${filterName}-list`}
        aria-haspopup="true"
      >
        {filterName}
      </button>

      <ul
        className="pinkpanther-filter-list"
        id={`filter-${filterName}-list`}
        role="menu"
        hidden={!isOpen}
      >
        {filterList?.map((filter, index) => (
          <li key={index} role="menuitemcheckbox">
            <label className="pinkpanther-filter-input-label">
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
    </div>
  );
}

export default memo(FilterCheckboxListComponent);
