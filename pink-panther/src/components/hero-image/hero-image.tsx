import React from "react";
import './hero-image.css'

function HeroImage({ image }: any) {

    return (
        <div>
            <img className='hero-image' src={image} alt="diamond ring" />
        </div>
    );

}

export default HeroImage;