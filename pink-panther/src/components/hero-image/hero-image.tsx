import React from "react";
import './hero-image.css'
import aboutHeroImage from '../../assets/hero-about.webp';

function HeroImage() {

    return (
        <div>
            <img className='hero-image' src={aboutHeroImage} alt="pink diamond ring hero image" />
        </div>
    );

}

export default HeroImage;