import shapeFilters from '../../shape-filters.json';
import styleFilters from '../../style-filters.json';
import metalFilters from '../../metal-filters.json';
import FilterCheckboxList from './filter-checkbox/filter-checkbox';
import './filters.scss';

type FilterCategory = 'shape' | 'style' | 'metal';
type FiltersState = Record<FilterCategory, Set<string>>;

interface FiltersProps {
  selectedFilters: FiltersState;
  onToggle: (category: FilterCategory, value: string) => void;
}

function Filters({ selectedFilters, onToggle }: FiltersProps) {
  return (
    <div className='pinkpanther-filters'>
      <h4>Filter by</h4>

      <FilterCheckboxList
        filterName="shape"
        filterList={shapeFilters}
        isChecked={(value: string) => selectedFilters.shape.has(value)}
        onToggle={(value: string) => onToggle('shape', value)}
      />

      <FilterCheckboxList
        filterName="style"
        filterList={styleFilters}
        isChecked={(value: string) => selectedFilters.style.has(value)}
        onToggle={(value: string) => onToggle('style', value)}
      />

      <FilterCheckboxList
        filterName="metal"
        filterList={metalFilters}
        isChecked={(value: string) => selectedFilters.metal.has(value)}
        onToggle={(value: string) => onToggle('metal', value)}
      />
    </div>
  );
}

export default Filters;