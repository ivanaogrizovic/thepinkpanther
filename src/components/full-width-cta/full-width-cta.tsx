import { Link } from "react-router-dom";
import './full-width-cta.scss';

function FullWdithCta({ image, title, text, buttonText, link }: any) {

    return (
        <div className="pinkpanther-full-width-cta">
            {image && <img src={image} alt=""/>}
            <div className="pinkpanther-full-width-cta-content -dark-theme">
                <h2 className="pinkpanther-full-width-cta-title">{title}</h2>
                <p className="pinkpanther-full-width-cta-text">{text}</p>
                <p><Link to={link} className='pinkpanther-cta-link -dark-theme'>{buttonText} →</Link></p>
            </div>
        </div>
    );

}

export default FullWdithCta;