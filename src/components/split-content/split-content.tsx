import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes.config";
import "./split-content.scss";

type SplitContentProps = {
  title: string;
  text: string;
  link: string;
  image: string;
};

export default function SplitContent({
  title,
  text,
  link,
  image,
}: SplitContentProps) {
  return (
    <div className="pinkpanther-split-content" aria-label={title}>
      <img
        src={image}
        className="pinkpanther-split-content-image slide-left"
        alt=""
      />
      <div className="pinkpanther-split-content-text -fade-in-up">
        <h1>{title}</h1>
        <p>{text}</p>
        {link && (
          <p>
            <Link to={ROUTES.SHOP.ENGAGEMENT} className="pinkpanther-cta-link">
              {link} →
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
