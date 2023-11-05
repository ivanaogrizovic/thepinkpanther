import React from 'react';
import './items-grid.css'
import { Link } from "react-router-dom";
import { engagementRing } from '../../interfaces/engagementRing.interface';

function ItemsGrid(props: any) {

    var frontImage = 0;

    return (
        <div className='item-list'>
            {props.rings.map((ring: engagementRing) => (
                <Link to="item-detail">
                    <div className='item' key={ring.name}>
                        <img className='item__img' src={ring.images[frontImage]} alt={ring.name}></img>
                        <div className='item-text'>
                            <p className='item__name'>{ring.name}</p>
                            <h3 className='item__price'>{ring.price}€</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ItemsGrid;