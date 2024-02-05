import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetail from '../components/item-detail/item-detail';

function Product() {

    const location = useLocation();
    const productDetail = location.state;

    return (
        <div className='fade-in'>
            <ItemDetail singleProduct={productDetail[0]}></ItemDetail>
        </div>
    );
}

export default Product;