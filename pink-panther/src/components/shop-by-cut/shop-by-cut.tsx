import React from "react";
import './shop-by-cut.css';

import cutOval from '../../assets/cut-oval.png';
import cutPrincess from '../../assets/cut-princess.png';
import cutEmerald from '../../assets/cut-emerald.png';
import cutPear from '../../assets/cut-pear.png';
import cutCushion from '../../assets/cut-cushion.png';
import cutRound from '../../assets/cut-cushion.png';
import cutMarquise from '../../assets/cut-marquise.png';

function ShopByCut(){
    return(
        <div className='ShopByCut'>
            <h3 className="main-title">SHOP ENGAGEMENT RINGS BY SHAPE</h3>
            <div className='shapes-wrapper'>
               <ul className='shapes-list'>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image' src={cutOval}></img>
                  <p>Oval</p>
                  </a>
                </li>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image'src={cutPrincess}></img>
                  <p>Princess</p>
                  </a>
                </li>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image'src={cutEmerald}></img>
                  <p>Emerald</p>
                  </a>
                </li>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image' src={cutPear}></img>
                  <p>Pear</p>
                  </a>
                </li>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image' src={cutCushion}></img>
                  <p>Cushion</p>
                  </a>
                </li>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image' src={cutRound}></img>
                  <p>Round</p>
                  </a>
                </li>
                <li className='single-shape'>
                  <a href=''>
                  <img className='single-shape__image' src={cutMarquise}></img>
                  <p>Marquise</p>
                  </a>
                </li>
               </ul>
            </div>
        </div>
    );
}

export default ShopByCut;