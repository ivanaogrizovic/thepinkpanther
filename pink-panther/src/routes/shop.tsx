import React from 'react';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';

import engagementRings from '../engagement-rings.json';

function Shop(props: any) {

    console.log(props)

    return (
        <div className='shop-wrapper'>
            <Filters />
            <ItemsGrid rings={engagementRings} />
        </div>
    );
}

export default Shop;