import { Link } from "react-router-dom";
import engagement from '../../assets/occasion-engagement.webp';
import anniversary from '../../assets/style-eternity.webp';
import weddingBands from '../../assets/style-wedding-bands.webp';
import gifstHer from '../../assets/style-gift.webp';
import menStyle from '../../assets/style-men.webp';
import cocktail from '../../assets/cocktail-rings.webp';
import './shop-by-occasion.scss';

function ShopByOccasion() {

  interface occasion {
    src: string
    alt: string
    name: string
    blurb: string
  }

  const occasionList: occasion[] = [
    {
      src: engagement,
      alt: "",
      name: "engagement",
      blurb: "Make it official, with a sparkle that says 'forever starts here'."
    },
    {
      src: anniversary,
      alt: "",
      name: "anniversary",
      blurb: "Timeless love deserves a little extra shine."
    },
    {
      src: weddingBands,
      alt: "",
      name: "wedding bands",
      blurb: "The circle of love. Sealed with serious style."
    },
    {
      src: gifstHer,
      alt: "",
      name: "gifts for her",
      blurb: "From sweet surprises to major moments. Make her day shimmer."
    },
    {
      src: menStyle,
      alt: "",
      name: "gifts for him",
      blurb: "For the man who has everything. Even a little extra shine."
    },
    {
      src: cocktail,
      alt: "",
      name: "Cocktail rings",
      blurb: "Bold, bright, just like yourself."
    }
  ];

  return (
    <div className="pinkpanther-shop-by-occasion">
      <h2>Shop rings by occasion</h2>
      <p>Big moments, small moments, or just feeling fabulous.<br></br>There’s a ring for that.</p>
        <div className="pinkpanther-shop-by-occasion-list">
          {occasionList.map((occasion, index) => (
            <div className='pinkpanther-shop-by-occasion-item' key={index}>
              <Link to='shop/engagement'>
                <p className='pinkpanther-shop-by-occasion-blurb -microcopy'>{occasion.blurb}</p>
                <img className='pinkpanther-shop-by-occasion-image' src={occasion.src} alt={occasion.alt}></img>
                <h3>{occasion.name}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShopByOccasion;
