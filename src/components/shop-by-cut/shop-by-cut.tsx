import { useMemo } from "react";
import { useProductsContext } from "../../context/products.context";
import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import { motion, Variants } from "framer-motion";
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

export default function ShopByCut() {
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
      id="shop-section"
    >
      <div className="pinkpanther-shop-by-cut">
        <h2>Find Your Shape</h2>
        <p>
          Explore our collection through the artistry of diamond cuts: each one
          a distinct expression of style and character.
        </p>
        <p>
          Select a shape to begin your journey, from the timeless brilliance of
          round to the refined elegance of emerald or the romantic allure of
          princess.
        </p>
        <ul className="pinkpanther-shop-by-cut-list">
          {cutsList.map((cut, index) => (
            <li key={cut} className="pinkpanther-shop-by-cut-item">
              <Link
                to={`/shop/engagement?shape=${cut}`}
                state={ringsByCut[cut]}
              >
                <motion.img
                  className="pinkpanther-shop-by-cut-item-image"
                  src={cutImages[cut]}
                  alt=""
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1, // 👈 subtle stagger
                    ease: "linear",
                  }}
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
