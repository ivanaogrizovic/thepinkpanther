import { Link } from 'react-router-dom';
import './split-content.scss';


function SplitContentReverse({ title, text, link, image }: any) {
    return (
        <div className='Slideshow'>
            <div className='slideshow-item slide-text'>
                <h3 className='slide-title'>{title}</h3>
                <p className='slide-p main-text'>{text}</p>
                <p className='slide-p'><Link to='shop' className='slide-link'>{link}</Link></p>
            </div>
            <img src={image} className='slideshow-item slide-image' alt='ambassador portrait' />
        </div>
    );
}

export default SplitContentReverse;
