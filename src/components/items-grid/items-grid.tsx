import React from 'react';
import './items-grid.css'
import { Link } from "react-router-dom";
import { engagementRing } from '../../interfaces/engagementRing.interface';

function ItemsGrid({ rings }: any) {

  var frontImage = 0;
  var result: [] = [];

  const filterSelectedItem = (name: string) => {
    result = rings.filter((ring: any) => {
      return ring.name === name;
    });
    return result;
  };

  return (
    <div className='item-list fade-in'>
      {rings?.map((ring: engagementRing, index: number) => (
        <Link to="item-detail" state={filterSelectedItem(ring.name)} key={index}>
          <div className='item'>
            <img className='item__img' src={ring?.images[frontImage]} alt={ring.name}></img>
            <div className='item-text'>
              <p className='item__name'>{ring.name}</p>
              <h3 className='item__price'>{ring.price}€</h3>
            </div>
          </div>
        </Link>
      ))}
      {rings.length === 0 &&
        <div className='fade-in'>
          <h3>
            Sorry, we don't have what you're looking for
          </h3>
        </div>
      }
    </div>
  );
}

export default ItemsGrid;