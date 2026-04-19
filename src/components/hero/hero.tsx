import ambassador from "../../assets/hero-ambassador.webp";
import Button from "../button/button";
import "./hero.scss";

type HeroProps = {
  mainRef: React.RefObject<HTMLDivElement | null>;
};

export default function Hero({ mainRef }: HeroProps) {
  return (
    <div className="pinkpanther-hero">
      <img className="pinkpanther-hero-image" src={ambassador} alt="" />
      <div className="pinkpanther-hero-text-container">
        <h1 className="pinkpanther-hero-title">Forever Starts Here</h1>
        <p>Beautifully crafted jewellery designed to capture your soul.</p>
        {/* TODO: FIND OUT WHY BUTTONS BLURS AFTER CLICK AND SCROLL */}
        <Button
          onClick={() =>
            mainRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Discover Our Diamonds
        </Button>
      </div>
    </div>
  );
}
