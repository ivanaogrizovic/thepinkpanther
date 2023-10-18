import React from 'react';
import './slideshow.css'
import ambassadorHeroTwo from '../../assets/ambassador-hero-2.jpg';

function Slideshow() {

    //how the beans do I make a functioning slideshow

    return (
        //https://react-slideshow-image.netlify.app/?path=/story/introduction--page??
        <div className='Slideshow'>
            <img src={ambassadorHeroTwo} className='slideshow__item slide-image' alt='ambassador portrait' />
            <div className='slideshow__item slide-text'>
                <h3 className='slide-text__title'>A love that will last a lifetime</h3>
                <p className='slide-text__p'>Only a real diamond holds true timeless beauty and value. <br />Slip on one of our dazzling, high grade diamond rings, guaranteed natural and conflict-free, and let it speak louder than words.</p>
                <p className='slide-text__p'><a href='' className='slide-link'>Shop engagement rings</a></p>
            </div>
        </div>
    );
}

export default Slideshow;