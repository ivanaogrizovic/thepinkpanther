import { Link } from 'react-router-dom';
import './slideshow.scss';


function Slideshow({ title, text, link, image }: any) {
    return (
        <div className='slideshow'>
            <img src={image} className='slideshow-item slide-image' alt='ambassador portrait' />
            <div className='slideshow-item slide-text'>
                <h3 className='slide-title'>{title}</h3>
                <p className='slide-p main-text'>{text}</p>
                <p className='slide-p'><Link to='shop' className='slide-link'>{link}</Link></p>
            </div>
        </div>
    );
}

export default Slideshow;
