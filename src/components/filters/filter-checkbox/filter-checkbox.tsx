import React, { useState } from 'react';
import { filter as FilterItem } from '../../../interfaces/filters.interface';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import '../filters';

interface FilterCheckboxListProps {
  filterName: string;
  filterList: FilterItem[];
  isChecked: (value: string) => boolean;
  onToggle: (value: string) => void;
}

function FilterCheckboxList({ filterName, filterList, isChecked, onToggle }: FilterCheckboxListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pinkpanther-filter-container">
      <button
        className="pinkpanther-filter-accordion -microcopy -bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {filterName}
        {isOpen ? <FaChevronRight /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <ul className="pinkpanther-filter-list -fade-in">
          {filterList?.map((filter, index) => (
            <li key={index}>
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

export default FilterCheckboxList;