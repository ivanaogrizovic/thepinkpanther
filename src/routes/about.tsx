import React from 'react';
import HeroImage from '../components/hero-image/hero-image';
import AboutSection from '../components/about-section/about-section';
import Slideshow from '../components/slideshow/slideshow';
import SlideshowReverse from '../components/slideshow/slideshow-reverse';
import aboutHeroImage from '../assets/hero-about-cut.webp';
import ambassadorImage1 from '../assets/about-ambassador-1.webp';
import ambassadorImage2 from '../assets/about-ambassador-2.webp';

function About() {

    const ambassadorTitle1 = "innovation, always";
    const ambassadorText1 = "Innovation is at the heart of what we do. The Pink Panther creates wear-forever, high quality and affordable jewellery, using conflict-free and ethically sourced natural mined diamonds as well as sustainable, lab grown diamonds. Our unique, innovative technology means that we can offer rare and beautiful lab grown stones - such as coloured diamonds - at an affordable price point.";
    const ambassadorLink1 = "shop innovation";
    const ambassadorTitle2 = "the future of diamonds";
    const ambassadorText2 = "In 2019, The Pink Panther were one of the first jewellers to recognise lab grown as the future, and now over half of our collection is available as both natural mined and lab grown diamonds. We are constantly working to improve and increase our lab grown diamond offerings."

    return (
        <div className='fade-in'>
            <HeroImage image={aboutHeroImage} />
            <AboutSection />
            <Slideshow image={ambassadorImage1} title={ambassadorTitle1} text={ambassadorText1} link={ambassadorLink1}></Slideshow>
            <SlideshowReverse image={ambassadorImage2} title={ambassadorTitle2} text={ambassadorText2}></SlideshowReverse>
            <div className='bottom-margin'></div>
        </div>
    );
}

export default About;