import React from 'react';
import './items-grid.css'
import { engagementRing } from '../../interfaces/engagementRing.interface';

function ItemsGrid(props: any) {

    var frontImage = 0;

    // console.log(props)

    return (
        <div className='item-list'>
            {props.rings.map((ring: engagementRing) => (
                <div className='item' key={ring.name}>
                    <img className='item__img' src={ring.images[frontImage]} alt={ring.name}></img>
                    <div className='item-text'>
                        <p className='item__name'>{ring.name}</p>
                        <h3 className='item__price'>{ring.price}€</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemsGrid;