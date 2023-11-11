import React from "react";
import './hero-image.css'

function HeroImage(props: any) {

    const heroImage = props.image;

    return (
        <div>
            <img className='hero-image' src={heroImage} alt="diamond ring" />
        </div>
    );

}

export default HeroImage;