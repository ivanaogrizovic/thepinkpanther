import {filter } from '../../../interfaces/filters.interface';
import '../filters';

function FilterCheckboxList ({filterName, filterList, handleChange} : any) {
    
    return (
        <>
            <p className='-microcopy -bold'>{filterName}</p>
            <ul className='pinkpanther-filter-list'>
                {filterList?.map((filter: filter, index: number) => (
                    (<li key={index}>
                        <label>
                            <input type="checkbox" onChange={() => handleChange(filter)} />
                            {filter.value}
                        </label>
                    </li>)
                ))}
            </ul >
        </>
    )
}

export default FilterCheckboxList;