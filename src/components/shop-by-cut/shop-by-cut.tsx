import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ProductsContext } from '../../context/engagementRings.context';
import { engagementRing } from "../../interfaces/engagementRing.interface";
import { shape } from "../../interfaces/cuts.interface";
import cutOval from '../../assets/cut-oval.webp';
import cutPrincess from '../../assets/cut-princess.webp';
import cutEmerald from '../../assets/cut-emerald.webp';
import cutPear from '../../assets/cut-pear.webp';
import cutCushion from '../../assets/cut-cushion.webp';
import cutRound from '../../assets/cut-round.webp';
import cutMarquise from '../../assets/cut-marquise.webp';
import './shop-by-cut.scss';

function ShopByCut() {

  let result: engagementRing[] = [];
  const rings = useContext(ProductsContext);

  const filterByCut = (cut: string) => {
    result = rings.products.filter((ring: engagementRing) => {
      return ring.shape === cut;
    });
    return result;
  };

  const cutsList: shape[] = [
    {
      src: cutOval,
      name: "oval",
    },
    {
      src: cutPrincess,
      name: "princess",
    },
    {
      src: cutEmerald,
      name: "emerald",
    },
    {
      src: cutPear,
      name: "pear",
    },
    {
      src: cutCushion,
      name: "cushion",
    },
    {
      src: cutRound,
      name: "round",
    },
    {
      src: cutMarquise,
      name: "marquise",
    },
  ];

  return (
    <div className="pinkpanther-shop-by-cut-wrapper">
      <div className='pinkpanther-shop-by-cut'>
        <h2>Shop engagement rings by shape</h2>
        <p>From timeless classics to modern icons, explore diamond cuts that tell your love story. Whether you’re drawn to a dazzling round, a bold emerald, or a romantic princess, find the diamond that cuts straight to your style.</p>
        <div className='pinkpanther-shop-by-cut-list'>
          {cutsList.map((cut, index) => (
            <Link className='pinkpanther-shop-by-cut-item' to="shop/engagement" state={filterByCut(cut.name)} key={index}>
              <img className='pinkpanther-shop-by-cut-item-image' src={cut.src} alt=""></img>
              <p className='-microcopy'>{cut.name}</p>
            </Link>
          ))}
        </div>
        <p>Not sure what you’re looking for? <Link to='shop' className='pinkpanther-cta-link'>Speak to an expert.</Link> We’ll help you find <i>the one</i>.</p>
      </div >
    </div>
  );
}

export default ShopByCut;
