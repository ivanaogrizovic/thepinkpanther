import { useMemo } from "react";
import { useProductsContext } from "../../context/products.context";
import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import oval from "../../assets/cut-oval.webp";
import princess from "../../assets/cut-princess.webp";
import emerald from "../../assets/cut-emerald.webp";
import pear from "../../assets/cut-pear.webp";
import cushion from "../../assets/cut-cushion.webp";
import round from "../../assets/cut-round.webp";
import marquise from "../../assets/cut-marquise.webp";
import "./shop-by-cut.scss";

const cutImages: Record<string, string> = {
  oval,
  princess,
  emerald,
  pear,
  cushion,
  round,
  marquise,
};

type ShopByCutProps = {
  mainRef: React.RefObject<HTMLDivElement | null>;
};

export default function ShopByCut({ mainRef }: ShopByCutProps) {
  const { products, getUniqueValues } = useProductsContext();
  const cutsList = getUniqueValues("shape");

  const ringsByCut = useMemo(() => {
    const map: Record<string, typeof products> = {};
    cutsList.forEach((cut) => {
      map[cut] = products.filter((ring) => ring.shape === cut);
    });
    return map;
  }, [products, cutsList]);

  return (
    <div
      className="pinkpanther-shop-by-cut-wrapper"
      data-testid="shop-by-cut-section"
      ref={mainRef}
      id="shop-section"
    >
      <div
        className="pinkpanther-shop-by-cut"
        role="region"
        aria-label="Shop engagement rings by shape"
      >
        <h2>Shop engagement rings by shape</h2>
        <p>
          From timeless classics to modern icons, explore diamond cuts that tell
          your love story. Whether you’re drawn to a dazzling round, a bold
          emerald, or a romantic princess, find the diamond that cuts straight
          to your style.
        </p>

        <ul className="pinkpanther-shop-by-cut-list">
          {cutsList.map((cut) => (
            <li key={cut} className="pinkpanther-shop-by-cut-item">
              <Link
                to={`/shop/engagement?shape=${cut}`}
                state={ringsByCut[cut]}
              >
                <img
                  className="pinkpanther-shop-by-cut-item-image"
                  src={cutImages[cut]}
                  alt=""
                />
                <h5>{cut}</h5>
              </Link>
            </li>
          ))}
        </ul>

        <p>
          Not sure what you’re looking for?{" "}
          <Link to={ROUTES.BOOK} className="pinkpanther-cta-link">
            Speak to an expert.
          </Link>{" "}
          We’ll help you find <i>the one</i>.
        </p>
      </div>
    </div>
  );
}
