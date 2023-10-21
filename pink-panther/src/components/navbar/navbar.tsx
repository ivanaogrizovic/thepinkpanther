import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

import engagementMenu from '../../assets/engagement-ring-menu.webp';
import weddingMenu from '../../assets/wedding-menu.webp';
import shapeOval from '../../assets/shape-oval.png';
import shapePrincess from '../../assets/shape-princess-cut.png';
import shapeEmerald from '../../assets/shape-emerald-cut.png';
import shapePear from '../../assets/shape-pear.png';
import shapeCuscion from '../../assets/shape-cushion.png';
import shapeRound from '../../assets/shape-round.png';
import shapeMarquise from '../../assets/shape-marquise.png';

function Navigation() {
  return (
    <nav className='navigation' data-action='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'><Link to=''>Engagement Rings</Link>
          <div className='sub-navigation' role='menu'>
            <ul className='sub-navigation__list'>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Shape</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapeOval} className='sub-navigation__cuts' alt='oval shape diamond cut' />Oval</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapePrincess} className='sub-navigation__cuts' alt='oval shape princess cut' />Princess</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapeEmerald} className='sub-navigation__cuts' alt='oval shape emerald cut' />Emerald</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapePear} className='sub-navigation__cuts' alt='oval shape pear cut' />Pear</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapeCuscion} className='sub-navigation__cuts' alt='oval shape cushion cut' />Cushion</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapeRound} className='sub-navigation__cuts' alt='oval shape round cut' />Round</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>
                    <img src={shapeMarquise} className='sub-navigation__cuts' alt='oval shape marquise cut' />Marquise</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Style</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Halo</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Solitaire</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Three Stone</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Double Halo</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Straight</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Metal</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>White Gold</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Yellow Gold</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Platinum</Link></li>
                </ul>
              </li>
              <li className='sub-navigation__item'>
                <span className='sub-navigation__filter'>Price</span>
                <ul className='sub-navigation__item-2'>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>Less than 500€</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>500€ to 1.000€</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>1000€ to 2.500€</Link></li>
                  <li className='sub-navigation__list-2'><Link to='shop/engagement'>2.500€ and more</Link></li>
                </ul>
              </li>
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