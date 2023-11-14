import React from "react";
import './shop-by-cut.css';
import { Link } from "react-router-dom";
import { shape } from "../../interfaces/cuts.interface";

import cutOval from '../../assets/cut-oval.webp';
import cutPrincess from '../../assets/cut-princess.webp';
import cutEmerald from '../../assets/cut-emerald.webp';
import cutPear from '../../assets/cut-pear.webp';
import cutCushion from '../../assets/cut-cushion.webp';
import cutRound from '../../assets/cut-round.webp';
import cutMarquise from '../../assets/cut-marquise.webp';
import { engagementRing } from "../../interfaces/engagementRing.interface";

function ShopByCut({ rings }: any) {

  var result: [] = [];

  const filterByCut = (cut: string) => {
    result = rings.filter((ring: engagementRing) => {
      return ring.shape === cut;
    });
    return result;
  };

  const cutsList: shape[] = [
    {
      id: 0,
      src: cutOval,
      alt: "oval cut diamond",
      name: "oval",
    },
    {
      id: 1,
      src: cutPrincess,
      alt: "princess cut diamond",
      name: "princess",
    },
    {
      id: 2,
      src: cutEmerald,
      alt: "emerald cut diamond",
      name: "emerald",
    },
    {
      id: 3,
      src: cutPear,
      alt: "pear cut diamond",
      name: "pear",
    },
    {
      id: 4,
      src: cutCushion,
      alt: "cushion cut diamond",
      name: "cushion",
    },
    {
      id: 5,
      src: cutRound,
      alt: "round cut diamond",
      name: "round",
    },
    {
      id: 6,
      src: cutMarquise,
      alt: "marquise cut diamond",
      name: "marquise",
    },
  ];

  return (
    <div className='ShopByCut'>
      <h3 className="main-title">Shop engagement rings by shape</h3>
      <div className='shapes-wrapper'>
        <ul className='shapes-list'>
          {cutsList.map(cut => (
            <li className='single-shape' key={cut.id}>
              <Link to="shop/engagement" state={filterByCut(cut.name)} >
                <img className='single-shape__image' src={cut.src} alt={cut.alt}></img>
                <p>{cut.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default ShopByCut;