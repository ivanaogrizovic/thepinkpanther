import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import "./split-content.scss";

type SplitContentProps = {
  title: string;
  text: string;
  link: string;
  image: string;
  theme?: string;
};

export default function SplitContent({
  title,
  text,
  link,
  image,
  theme,
}: SplitContentProps) {
  return (
    <div className={`-${theme}`}>
      <div className="pinkpanther-split-content" data-testid="hero-section">
        <div className="pinkpanther-split-content-text -fade-in-up">
          <h2>{title}</h2>
          <p>{text}</p>
          {link && (
            <p>
              <Link
                to={ROUTES.SHOP.ENGAGEMENT}
                className="pinkpanther-cta-link"
              >
                {link} →
              </Link>
            </p>
          )}
        </div>
        <img
          src={image}
          className="pinkpanther-split-content-image slide-left"
          alt=""
        />
      </div>
    </div>
  );
}
