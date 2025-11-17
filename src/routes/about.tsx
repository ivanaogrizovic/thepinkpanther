import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/hero/hero';
import AboutSection from '../components/about-section/about-section';
import SplitContent from '../components/split-content/split-content';
import aboutHeroImage from '../assets/hero-about.webp';
import ambassadorImage1 from '../assets/about-ambassador-1.webp';
import FullWdithCta from '../components/full-width-cta/full-width-cta';

function About() {

    return (
        <div className='-fade-in'>
            <Hero image={aboutHeroImage} />
            <FullWdithCta 
                title="Our diamond story"
                text="The Pink Panther is a fictional fine-jewellery brand created as a showcase project to demonstrate the author’s front-end development skills. Inspired by timeless elegance and playful luxury, the brand serves as a creative canvas for experimenting with modern web technologies, polished UI design, and responsive e-commerce experiences."
                linkText="Explore diamonds"
                link="/shop/engagement"
            />
            <AboutSection />
            <SplitContent 
                image={ambassadorImage1} 
                title="Where Code Meets Sparkle" 
                text="Behind every ring is a little bit of magic… and a lot of React logic. The Pink Panther’s interactive filters let users mix and match shapes, styles, and metals in real time. Styled with modular SCSS and optimized for performance, this project lives on GitHub Pages." 
                link="Explore" 
            />
            <FullWdithCta 
                title="Thank you for reading this far"
                text="You can find more info about this project in the future. Feel free to contact me for any further inquiry."
                linkText="Get in touch"
                link="https://www.linkedin.com/in/ivana-ogrizovic/"
            />
        </div>
    );
}

export default About;