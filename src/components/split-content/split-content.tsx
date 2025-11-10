import { Link } from 'react-router-dom';
import './split-content.scss';


function SplitContent({ title, text, link, image }: any) {
    return (
        <div className='pinkpanther-split-content'>
            <img src={image} className='pinkpanther-split-content-image slide-left' alt='' />
            <div className='pinkpanther-split-content-text'>
                <h1>{title}</h1>
                <p>{text}</p>
                <p><Link to='shop' className='pinkpanther-split-content-link'>{link} →</Link></p>
            </div>
        </div>
    );
}

export default SplitContent;
