import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/hero/hero';
import AboutSection from '../components/about-section/about-section';
import SplitContent from '../components/split-content/split-content';
import aboutHeroImage from '../assets/hero-about-cut.webp';
import ambassadorImage1 from '../assets/about-ambassador-1.webp';

function About() {

    return (
        <div className='-fade-in'>
            <Hero image={aboutHeroImage} />
            <div className="pinkpanther-about-us-blurb">
                <h3>Our diamon story</h3>
                <p>The Pink Panther is a fictional fine-jewellery brand created as a showcase project to demonstrate the author’s front-end development skills. Inspired by timeless elegance and playful luxury, the brand serves as a creative canvas for experimenting with modern web technologies, polished UI design, and responsive e-commerce experiences.</p>
                <Link className="pinkpanther-cta-link" to="/shop/engagement">Explore diamonds →</Link>
            </div>
            <AboutSection />
            <SplitContent 
                image={ambassadorImage1} 
                title="Where Code Meets Sparkle" 
                text="Behind every ring is a little bit of magic… and a lot of React logic. The Pink Panther’s interactive filters let users mix and match shapes, styles, and metals in real time. Styled with modular SCSS and optimized for performance, this project lives on GitHub Pages." 
                link="Explore" 
            />
            <div className="pinkpanther-about-us-blurb">
                <h3>Thank you for reading this far</h3>
                <p>You can find more info about this project in the future. Feel free to contact me for any further inquiry.</p>
                <a href="https://www.linkedin.com/in/ivana-ogrizovic/" target="blank" rel="noreferrer" className="pinkpanther-cta-link" >Get in touch →</a>
            </div>
        </div>
    );
}

export default About;