import React from "react";
import './shop-by-style.css';

import anniversaryStyle from '../../assets/style-anniversary.webp';
import eternityStyle from '../../assets/style-eternity.webp';
import weddingStyle from '../../assets/style-wedding-bands.webp';
import giftStyle from '../../assets/style-gift.jpg';
import menStyle from '../../assets/style-men.webp';

function ShopByStyle() {

  interface styles {
    id: number
    src: string
    alt: string
    name: string
    link: string
  }

  const stylesList: styles[] = [
    {
      id: 0,
      src: anniversaryStyle,
      alt: "anniversary style rings",
      name: "anniversary",
      link: ""
    },
    {
      id: 1,
      src: eternityStyle,
      alt: "eternity rings style rings",
      name: "eternity",
      link: ""
    },
    {
      id: 2,
      src: weddingStyle,
      alt: "wedding bands style rings",
      name: "wedding bands",
      link: ""
    },
    {
      id: 3,
      src: menStyle,
      alt: "mens wedding bands style rings",
      name: "men's wedding bands",
      link: ""
    },
    {
      id: 4,
      src: giftStyle,
      alt: "gift ideas for rings",
      name: "gift",
      link: ""
    },
  ];

  return (
    <div className='ShopByStyle'>
      <h3 className='main-title'>Shop rings by style</h3>
      <div className='styles-wrapper'>
        <ul className="styles-list">
          {stylesList.map(style => (
            <li className='single-style' key={style.id}>
              <a href={style.link}>
                <img className='single-style__image' src={style.src} alt={style.alt}></img>
                <h3>{style.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopByStyle;