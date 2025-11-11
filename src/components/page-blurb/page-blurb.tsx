import { Link } from "react-router-dom";
import './page-blurb.scss';


function PageBlurb({title, paragraph, link, url} :any) {

    return (
        <div className="pinkpanther-about-us-blurb">
            <h2>{title}</h2>
            <p>{paragraph}</p>
            {link && <Link className="pinkpanther-cta-link" to={url}>{link} →</Link>}
        </div>
    );
}

export default PageBlurb;
