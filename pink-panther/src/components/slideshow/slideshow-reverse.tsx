import React from 'react';
import '../slideshow/slideshow.css'
import { Link } from 'react-router-dom';


function SlideshowReverse(props: any) {
    return (
        <div className='Slideshow'>
            <div className='slideshow__item slide-text'>
                <h3 className='slide-text__title'>{props.title}</h3>
                <p className='slide-text__p main-text'>{props.text}</p>
                <p className='slide-text__p'><Link to='shop' className='slide-link'>{props.link}</Link></p>
            </div>
            <img src={props.image} className='slideshow__item slide-image' alt='ambassador portrait' />
        </div>
    );
}

export default SlideshowReverse;