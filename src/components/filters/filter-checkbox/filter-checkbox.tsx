import React, { useState, memo } from "react";

interface FilterCheckboxListProps {
  key: string;
  filterName: string;
  filterList: string[];
  isChecked: (value: string) => boolean;
  onToggle: (value: string) => void;
}

function FilterCheckboxListComponent({
  key,
  filterName,
  filterList,
  isChecked,
  onToggle,
}: FilterCheckboxListProps) {
  return (
    <div className="pinkpanther-filter" key={key}>
      <h6>{filterName}</h6>
      <ul className="pinkpanther-filter-list">
        {filterList.map((value) => (
          <li key={value}>
            <label className="pinkpanther-filter-input-label">
              <input
                type="checkbox"
                checked={isChecked(value)}
                onChange={() => onToggle(value)}
              />
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(FilterCheckboxListComponent);
