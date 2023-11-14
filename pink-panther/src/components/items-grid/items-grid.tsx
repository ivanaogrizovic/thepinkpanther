import React from 'react';
import './items-grid.css'
import { Link } from "react-router-dom";
import { engagementRing } from '../../interfaces/engagementRing.interface';

function ItemsGrid({ rings }: any) {

  // console.log(props);

  var frontImage = 0;
  var result: [] = [];

  const filterSelectedItem = (name: string) => {
    result = rings.filter((ring: any) => {
      return ring.name === name;
    });
    return result;
  };

  return (
    <div className='item-list'>
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
    </div>
  );
}

export default ItemsGrid;