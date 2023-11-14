import React from 'react';
import '../slideshow/slideshow.css'
import { Link } from 'react-router-dom';


function SlideshowReverse({ title, text, link, image }: any) {
    return (
        <div className='Slideshow'>
            <div className='slideshow__item slide-text'>
                <h3 className='slide-text__title'>{title}</h3>
                <p className='slide-text__p main-text'>{text}</p>
                <p className='slide-text__p'><Link to='shop' className='slide-link'>{link}</Link></p>
            </div>
            <img src={image} className='slideshow__item slide-image' alt='ambassador portrait' />
        </div>
    );
}

export default SlideshowReverse;