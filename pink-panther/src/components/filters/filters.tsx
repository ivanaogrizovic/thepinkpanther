import React from 'react';
import './filters.css';
import { filter } from '../../interfaces/filters.interface';

function Filters({ filterShape, shapeFilters }: any) {

    const handleChange = (selectedFilter: filter) => {
        selectedFilter.isChecked = !selectedFilter.isChecked;
        filterShape(selectedFilter);
    };

    return (
        <div className='filters'>
            <h3 className='filter-title'>Filter by</h3>
            <h3 className='filter'>Shape</h3>
            <ul className='filter-list'>
                {shapeFilters?.map((filter: filter, index: number) => (
                    (<li key={index}>
                        <label>
                            <input type="checkbox" onClick={() => (filter)} onChange={() => handleChange(filter)} />
                            {filter.value}
                        </label>
                    </li>)
                ))}
            </ul >
            <h3 className='filter'>Style</h3>
            {/* <ul className='filter-list'>
                {filtersList.filters.map((filter: filter) => (
                    filter.name === "style"
                        ? (<li>
                            <label>
                                <input type="checkbox" id={filter.name} name={filter.name} value={filter.name} onChange={() => handleChange(filter)} />{filter.value}
                            </label>
                        </li>)
                        : null
                ))}
            </ul >
            <h3 className='filter'>Metal</h3>
            <ul className='filter-list'>
                {filtersList.filters.map((filter: filter) => (
                    filter.name === "metal"
                        ? (<li>
                            <label>
                                <input type="checkbox" id={filter.name} name={filter.name} value={filter.name} onChange={() => handleChange(filter)} />{filter.value}
                            </label>
                        </li>)
                        : null
                ))}
            </ul >
            <h3 className='filter'>Price</h3>
            <ul className='filter-list'>
                {filtersList.filters.map((filter: filter) => (
                    filter.name === "price"
                        ? (<li>
                            <label>
                                <input type="checkbox" id={filter.name} name={filter.name} value={filter.name} onChange={() => handleChange(filter)} />{filter.value}€
                            </label>
                        </li>)
                        : null
                ))}
            </ul > */}
        </div>
    );
}

export default Filters;