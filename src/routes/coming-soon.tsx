import { Link } from "react-router";
import { ROUTES } from "../routes/routes.config";
import Hero from "../components/hero/hero";
import weddingBands from "../assets/wedding-bands.webp";
import fatCat from "../assets/fat-cat.webp";

export default function ComingSoon() {
  return (
    <>
      <div
        className="pinkpanther-coming-soon -fade-in"
        role="region"
        aria-label="Coming soon"
      >
        <h2>This section is coming soon, stay tuned</h2>
        <p>
          In the meantime, enjoy this picture of a cat, and a link to the{" "}
          <Link to={ROUTES.SHOP.ENGAGEMENT} className="pinkpanther-cta-link">
            Homepage →
          </Link>
        </p>
        <img
          className="pinkpanther-placeholder -fade-in"
          src={fatCat}
          alt=""
        ></img>
      </div>
    </>
  );
}
