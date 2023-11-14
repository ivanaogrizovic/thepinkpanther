import React from 'react';
import './item-detail.css'
import { Link } from "react-router-dom";
import Button from '../button/button';

function ItemDetail({ singleProduct }: any) {

    return (
        <div className='product-container shop-wrapper'>
            <div className='pictures-container'>
                {singleProduct.images.map((image: string) => (
                    <img className='product__img' src={image} alt={singleProduct.name}></img>
                ))}
            </div>
            <div className='text-container'>
                <div className='intro'>
                    <h3 className='product__name'>{singleProduct.name} Engagement Ring</h3>
                    <h3 className='product__price'>{singleProduct.price}€</h3>
                    <p className='product__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='product__descriptors'>Metal type:&nbsp;&nbsp;&nbsp;&nbsp;{singleProduct.metal}</p>
                    <p className='product__descriptors'>Center stone shape:&nbsp;&nbsp;&nbsp;&nbsp;{singleProduct.shape}</p>
                </div>
                <div className='buttons'>
                    <Button text="view in store" buttonClass="button button__primary"></Button>
                    <Button text="find the nearest store" buttonClass="button button__secondary"></Button>
                </div>
                <div className='product-details'>
                    <div className='row'><p className='column'>collection</p><p className='column'>classic</p>
                    </div>
                    <div className='row'><p className='column'>product type</p><p className='column'>engagement ring</p>
                    </div>
                    <div className='row'><p className='column'>style</p><p className='column'>{singleProduct.style}</p>
                    </div>
                    <div className='row'><p className='column'>metal type</p><p className='column'>{singleProduct.metal}</p>
                    </div>
                    <div className='row'><p className='column'>center stone shape</p><p className='column'>{singleProduct.shape}</p>
                    </div>
                    <div className='row'><p className='column'>center stone carat weight</p><p className='column carats'>{singleProduct.carats} ct</p>
                    </div>
                    <div className='row'><p className='column'>gemstone</p><p className='column'>{singleProduct.origin} diamond</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;