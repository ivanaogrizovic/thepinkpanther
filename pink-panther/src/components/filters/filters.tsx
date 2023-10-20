import React from 'react';
import './filters.css';

function Filters() {

    return (
        <div className='filter-list'>
            <h3 className='filter'>Filter by</h3>
            <h3 className='filter'>Shape</h3>
            <h3 className='filter'>Style</h3>
            <h3 className='filter'>Metal</h3>
            <h3 className='filter'>Price</h3>
        </div>
    );
}

export default Filters;