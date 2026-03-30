import "./hero.scss";

export default function Hero({ text, image }: { text: string; image: string }) {
  return (
    <div className="pinkpanther-hero" role="region" aria-label="Hero section">
      <h1>{text}</h1>
      <img src={image} alt={text} />
    </div>
  );
}
