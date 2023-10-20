import React from "react";
import './shop-by-cut.css';
import { Link } from "react-router-dom";

import cutOval from '../../assets/cut-oval.png';
import cutPrincess from '../../assets/cut-princess.png';
import cutEmerald from '../../assets/cut-emerald.png';
import cutPear from '../../assets/cut-pear.png';
import cutCushion from '../../assets/cut-cushion.png';
import cutRound from '../../assets/cut-cushion.png';
import cutMarquise from '../../assets/cut-marquise.png';

function ShopByCut(props: any) {

  interface cuts {
    id: number
    src: string
    alt: string
    name: string
  }

  const cutsList: cuts[] = [
    {
      id: 0,
      src: cutOval,
      alt: "oval cut diamond",
      name: "oval"
    },
    {
      id: 1,
      src: cutPrincess,
      alt: "princess cut diamond",
      name: "princess"
    },
    {
      id: 2,
      src: cutEmerald,
      alt: "emerald cut diamond",
      name: "emerald"
    },
    {
      id: 3,
      src: cutPear,
      alt: "pear cut diamond",
      name: "pear"
    },
    {
      id: 4,
      src: cutCushion,
      alt: "cushion cut diamond",
      name: "cushion"
    },
    {
      id: 5,
      src: cutRound,
      alt: "round cut diamond",
      name: "round"
    },
    {
      id: 6,
      src: cutMarquise,
      alt: "marquise cut diamond",
      name: "marquise"
    },
  ];
  return (
    <div className='ShopByCut'>
      <h3 className="main-title">Shop engagement rings by shape</h3>
      <div className='shapes-wrapper'>
        <ul className='shapes-list'>
          {cutsList.map(cut => (
            <li className='single-shape' key={cut.id}>
              <Link to={{ pathname: "/shop" }}>
                <img className='single-shape__image' src={cut.src} alt={cut.alt}></img>
                <p>{cut.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopByCut;