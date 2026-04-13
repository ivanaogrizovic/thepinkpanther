import ambassador from "../../assets/temp-amb.jpg";
import "./hero.scss";

export default function Hero() {
  return (
    <div className="pinkpanther-hero">
      <img className="pinkpanther-hero-image" src={ambassador} alt="" />
      <div className="pinkpanther-hero-text-container">
        <h1 className="pinkpanther-hero-title">Forever Starts Here</h1>
        <p>
          Discover beautifully crafted jewellery designed to capture your soul.
        </p>
      </div>
    </div>
  );
}
