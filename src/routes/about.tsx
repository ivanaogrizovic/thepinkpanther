import React from 'react';
import Hero from '../components/hero/hero';
import AboutSection from '../components/about-section/about-section';
import SplitContent from '../components/split-content/split-content';
import aboutHeroImage from '../assets/hero-about-cut.webp';
import ambassadorImage1 from '../assets/about-ambassador-1.webp';

function About() {

    return (
        <div className='-fade-in'>
            <Hero image={aboutHeroImage} />
            <AboutSection />
            <SplitContent 
                image={ambassadorImage1} 
                title="Where Code Meets Sparkle" 
                text="Behind every ring is a little bit of magic… and a lot of React logic. The Pink Panther’s interactive filters let users mix and match shapes, styles, and metals in real time. Styled with modular SCSS and optimized for performance, this project lives on GitHub Pages." 
                link="EXPLORE THE FILTER FUN" 
            />
        </div>
    );
}

export default About;