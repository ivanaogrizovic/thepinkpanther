import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import ShapeList from "./sub-navigation/shapeList";

import engagementMenu from '../../assets/engagement-ring-menu.webp';
import weddingMenu from '../../assets/wedding-menu.webp';
import StyleList from "./sub-navigation/styleList";
import MetalList from "./sub-navigation/metalList";
import PriceList from "./sub-navigation/priceList";

function Navigation({ productList }: any) {
  return (
    <nav className='navigation' data-action='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'><Link to='shop/engagement'>Engagement Rings</Link>
          <div className='sub-navigation' role='menu'>
            <ul className='sub-navigation__list'>
              <ShapeList rings={productList}></ShapeList>
              <StyleList rings={productList}></StyleList>
              <MetalList rings={productList}></MetalList>
              <PriceList rings={productList}></PriceList>
              <li className='sub-navigation__item'>
                <img src={engagementMenu} className='sub-navigation__image' alt='the pink panther logo' />
              </li>
            </ul>
          </div>
        </li>
        <li className='navigation__item'><Link to='shop/coming-soon'>Wedding Rings</Link>
          <div className='sub-navigation' role='menu'>
            <ul className='sub-navigation__list'>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Women's</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>Wedding bands</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>Eternity</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>Anniversary</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Men's</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>Wedding bands</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Metal</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>White Gold</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>Yellow Gold</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/coming-soon'>Platinum</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <img src={weddingMenu} className='sub-navigation__image' alt='the pink panther logo' />
              </li>
            </ul>
          </div>
        </li>
        <li className='navigation__item'><Link to='about'>About</Link></li>
        <li className='navigation__item'><Link to='book-an-appointment'>Book an appointment</Link></li>
        <li className='navigation__item'><Link to='contact-us'>Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;