import React from 'react';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';
import { useLocation } from 'react-router-dom';
function Shop(props: any) {


    const location = useLocation();
    const filteredRings = location.state;


    return (
        <div className='shop-wrapper'>
            <Filters />
            <ItemsGrid rings={filteredRings} />
        </div>
    );
}

export default Shop;