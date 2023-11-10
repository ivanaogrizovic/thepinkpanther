import React from 'react';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';
import { useLocation } from 'react-router-dom';

function Shop(props: any) {

    const location = useLocation();
    const filteredRings = location.state[0];
    const selectedFilter: string = location.state[1];

    console.log(selectedFilter);

    return (
        <div className='shop-wrapper'>
            <Filters filter={selectedFilter} />
            <ItemsGrid rings={filteredRings} />
        </div>
    );
}

export default Shop;