import { Link } from "react-router";
import "./full-width-cta.scss";

type FullWidthCtaProps = {
  title: string;
  text: string;
  linkText?: string;
  link?: string;
  theme?: string;
};

export default function FullWdithCta({
  title,
  text,
  linkText,
  link,
  theme,
}: FullWidthCtaProps) {
  return (
    <div
      className={`pinkpanther-full-width-cta -${theme}`}
      data-testid="full-width-cta"
    >
      <h2 className="pinkpanther-full-width-cta-title">{title}</h2>
      <p className="pinkpanther-full-width-cta-text">{text}</p>
      {link && linkText && (
        <p>
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="pinkpanther-cta-link"
          >
            {linkText} →
          </Link>
        </p>
      )}
    </div>
  );
}
