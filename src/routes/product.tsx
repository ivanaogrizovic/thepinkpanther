import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetail from '../components/item-detail/item-detail';
import { engagementRing } from '../interfaces/engagementRing.interface';

function Product() {

    const location = useLocation();
    const productDetail :engagementRing = location.state[0];

    console.log(productDetail)

    return (
        <div>
            <ItemDetail singleProduct={productDetail}></ItemDetail>
        </div>
    );
}

export default Product;