import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import ShapeList from "./sub-navigation/shapeList";

import engagementMenu from '../../assets/engagement-ring-menu.webp';
import weddingMenu from '../../assets/wedding-menu.webp';
import StyleList from "./sub-navigation/styleList";
import MetalList from "./sub-navigation/metalList";
import PriceList from "./sub-navigation/priceList";

function Navigation(props: any) {
  return (
    <nav className='navigation' data-action='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'><Link to=''>Engagement Rings</Link>
          <div className='sub-navigation' role='menu'>
            <ul className='sub-navigation__list'>
              <ShapeList rings={props.productList}></ShapeList>
              <StyleList rings={props.productList}></StyleList>
              <MetalList rings={props.productList}></MetalList>
              <PriceList rings={props.productList}></PriceList>
              <li className='sub-navigation__item'>
                <img src={engagementMenu} className='sub-navigation__image' alt='the pink panther logo' />
              </li>
            </ul>
          </div>
        </li>
        <li className='navigation__item'><Link to='shop/wedding'>Wedding Rings</Link>
          <div className='sub-navigation' role='menu'>
            <ul className='sub-navigation__list'>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Women's</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>Wedding bands</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>Eternity</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>Anniversary</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Men's</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>Wedding bands</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Metal</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>White Gold</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>Yellow Gold</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/wedding'>Platinum</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <img src={weddingMenu} className='sub-navigation__image' alt='the pink panther logo' />
              </li>
            </ul>
          </div>
        </li>
        <li className='navigation__item'><Link to=''>About</Link></li>
        <li className='navigation__item'><Link to=''>Book an appointment</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;