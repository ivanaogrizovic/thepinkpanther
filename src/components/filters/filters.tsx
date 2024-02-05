import React from 'react';
import './filters.css';
import { filter } from '../../interfaces/filters.interface';

function Filters({ getShapes, getStyles, getMetals, shapeFilters, styleFilters, metalFilters }: any) {

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
        <div className='filters'>
            <h3 className='filter-title'>Filter by</h3>
            <h3 className='filter-name'>Shape</h3>
            <ul className='filter-list'>
                {shapeFilters?.map((filter: filter, index: number) => (
                    (<li key={index}>
                        <label>
                            <input type="checkbox" onChange={() => handleChangeShape(filter)} />
                            {filter.value}
                        </label>
                    </li>)
                ))}
            </ul >
            <h3 className='filter'>Style</h3>
            <ul className='filter-list'>
                {styleFilters?.map((filter: filter, index: number) => (
                    (<li key={index}>
                        <label>
                            <input type="checkbox" onChange={() => handleChangeStyle(filter)} />
                            {filter.value}
                        </label>
                    </li>)
                ))}
            </ul >
            <h3 className='filter'>Metal</h3>
            <ul className='filter-list'>
                {metalFilters?.map((filter: filter, index: number) => (
                    (<li key={index}>
                        <label>
                            <input type="checkbox" onChange={() => handleChangeMetal(filter)} />
                            {filter.value}
                        </label>
                    </li>)
                ))}
            </ul >
            {/* 
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