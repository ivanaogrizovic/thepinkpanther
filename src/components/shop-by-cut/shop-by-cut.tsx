import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import { engagementRing } from "../../interfaces/engagementRing.interface";
import { shape } from "../../interfaces/cuts.interface";
import oval from "../../assets/cut-oval.webp";
import princess from "../../assets/cut-princess.webp";
import emerald from "../../assets/cut-emerald.webp";
import pear from "../../assets/cut-pear.webp";
import cushion from "../../assets/cut-cushion.webp";
import round from "../../assets/cut-round.webp";
import marquise from "../../assets/cut-marquise.webp";
import "./shop-by-cut.scss";

export default function ShopByCut() {
  const rings = useContext(ProductsContext);
  const { getUniqueValues } = useContext(ProductsContext);

  const filterByCut = (cut: string) =>
    rings.products.filter((ring) => ring.shape === cut);

  const cutsList = getUniqueValues("shape");

  const cutImages: Record<string, string> = {
    oval: oval,
    princess: princess,
    emerald: emerald,
    pear: pear,
    cushion: cushion,
    round: round,
    marquise: marquise,
  };

  return (
    <div className="pinkpanther-shop-by-cut-wrapper">
      <div className="pinkpanther-shop-by-cut">
        <h2>Shop engagement rings by shape</h2>
        <p>
          From timeless classics to modern icons, explore diamond cuts that tell
          your love story. Whether you’re drawn to a dazzling round, a bold
          emerald, or a romantic princess, find the diamond that cuts straight
          to your style.
        </p>
        <div className="pinkpanther-shop-by-cut-list">
          {cutsList.map((cut, index) => (
            <Link
              className="pinkpanther-shop-by-cut-item"
              to={`shop/engagement?shape=${cut}`}
              state={filterByCut(cut)}
              key={index}
            >
              <img
                className="pinkpanther-shop-by-cut-item-image"
                src={cutImages[cut]}
                alt={cut}
              ></img>
              <p className="-microcopy">{cut}</p>
            </Link>
          ))}
        </div>
        <p>
          Not sure what you’re looking for?{" "}
          <Link to="shop" className="pinkpanther-cta-link">
            Speak to an expert.
          </Link>{" "}
          We’ll help you find <i>the one</i>.
        </p>
      </div>
    </div>
  );
}
