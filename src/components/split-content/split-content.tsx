import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import "./split-content.scss";

interface SplitContentProps {
  title: string;
  text: string;
  link?: string;
  image: string;
  theme?: string;
  mainRef?: React.RefObject<HTMLDivElement | null>;
}

export default function SplitContent({
  title,
  text,
  link,
  image,
  theme,
  mainRef,
}: SplitContentProps) {
  return (
    <div className={`-${theme}`} data-testid="split-content" ref={mainRef}>
      <div className="pinkpanther-split-content" data-testid="hero-section">
        <div className="pinkpanther-split-content-text">
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
        <img src={image} className="pinkpanther-split-content-image" alt="" />
      </div>
    </div>
  );
}
