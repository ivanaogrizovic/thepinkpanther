import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetail from '../components/item-detail/item-detail';

function Product(props: any) {

    const location = useLocation();
    const productDetail = location.state;

    return (
        <ItemDetail product={productDetail[0]}></ItemDetail>
    );
}

export default Product;