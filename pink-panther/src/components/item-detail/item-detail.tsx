import React from 'react';
import './item-detail.css'
import { Link } from "react-router-dom";

function ItemDetail(props: any) {

    const singleProduct = props.product;

    return (
        <div className='product-container'>
            <div className='product-pictures'>
                {singleProduct.images.map((image: string) => (
                    <img className='product__img' src={image} alt={singleProduct.name}></img>
                ))}
            </div>
            <div className='product-intro'>
                <h3 className='product__name'>{singleProduct.name}</h3>
                <h3 className='product__price'>{singleProduct.price}€</h3>
                <p className='product__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='product__descriptors'>Metal type:&nbsp;&nbsp;&nbsp;&nbsp;{singleProduct.metal}</p>
                <p className='product__descriptors'>Center stone shape:&nbsp;&nbsp;&nbsp;&nbsp;{singleProduct.shape}</p>
                <div><Link to="item-detail"><h3 className='button button__primary'>view in store</h3></Link></div>
                <div><Link to="item-detail"><h3 className='button button__secondary'>find the nearest store</h3></Link></div>
            </div>
        </div>
    );
}

export default ItemDetail;