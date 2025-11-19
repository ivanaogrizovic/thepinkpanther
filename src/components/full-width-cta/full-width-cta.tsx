import { Link } from "react-router-dom";
import './full-width-cta.scss';

type FullWidthCtaProps = {
  title: string;
  text: string;
  linkText?: string;
  link?: string;
};

function FullWdithCta({ title, text, linkText, link }: FullWidthCtaProps) {

    return (
        <div className="pinkpanther-full-width-cta">
            <h2 className="pinkpanther-full-width-cta-title">{title}</h2>
            <p className="pinkpanther-full-width-cta-text">{text}</p>
            {link && linkText && <p><Link to={link} target="_blank" rel="noreferrer" className='pinkpanther-cta-link'>{linkText} →</Link></p>}
        </div>
    );

}

export default FullWdithCta;