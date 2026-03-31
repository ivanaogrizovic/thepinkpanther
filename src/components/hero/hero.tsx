import "./hero.scss";

export default function Hero({ text, image }: { text: string; image: string }) {
  return (
    <div className="pinkpanther-hero">
      <img src={image} alt={text} />
      <h1>{text}</h1>
    </div>
  );
}
