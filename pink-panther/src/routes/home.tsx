import React from 'react';

import Slideshow from './../components/slideshow/slideshow';
import ShopByCut from './../components/shop-by-cut/shop-by-cut';
import ShopByStyle from './../components/shop-by-style/shop-by-style';

function Home(props: any) {

    return (
        <div>
            <Slideshow />
            <ShopByCut rings={props.inventory.engagementRings} />
            <ShopByStyle rings={props.inventory} />
        </div>
    );
}

export default Home;