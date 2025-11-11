import { filter } from '../../interfaces/filters.interface';
import shapeFilters from '../../shape-filters.json';
import styleFilters from '../../style-filters.json';
import metalFilters from '../../metal-filters.json';
import './filters.scss';
import FilterCheckboxList from './filter-checkbox/filter-checkbox';

function Filters({ getShapes, getStyles, getMetals }: any) {

    const handleChangeShape = (selectedFilter: filter) => {
        selectedFilter.isChecked = !selectedFilter.isChecked;
        getShapes(selectedFilter.value);
    };

    const handleChangeStyle = (selectedFilter: filter) => {
        selectedFilter.isChecked = !selectedFilter.isChecked;
        getStyles(selectedFilter.value);
    };

    const handleChangeMetal = (selectedFilter: filter) => {
        selectedFilter.isChecked = !selectedFilter.isChecked;
        getMetals(selectedFilter.value);
    };

    return (
        <div className='pinkpanther-filters'>
            <h4>Filter by</h4>
            <FilterCheckboxList 
                filterName="shape"
                filterList={shapeFilters}
                handleChange={handleChangeShape}
            />
            <FilterCheckboxList 
                filterName="style"
                filterList={styleFilters}
                handleChange={handleChangeStyle}
            />
            <FilterCheckboxList 
                filterName="metal"
                filterList={metalFilters}
                handleChange={handleChangeMetal}
            />
        </div>
    );
}

export default Filters;