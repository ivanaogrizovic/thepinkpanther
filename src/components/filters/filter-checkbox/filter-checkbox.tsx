import React from 'react';
import { filter as FilterItem } from '../../../interfaces/filters.interface';
import '../filters';

interface FilterCheckboxListProps {
  filterName: string;
  filterList: FilterItem[];
  isChecked: (value: string) => boolean;
  onToggle: (value: string) => void;
}

function FilterCheckboxList({ filterName, filterList, isChecked, onToggle }: FilterCheckboxListProps) {
  return (
    <>
      <p className='-microcopy -bold'>{filterName}</p>
      <ul className='pinkpanther-filter-list'>
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
    </>
  );
}

export default FilterCheckboxList;