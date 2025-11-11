import React from 'react';
import Hero from '../components/hero/hero';
import bookImage from '../assets/book-hero.webp';
import SplitContent from '../components/split-content/split-content';
import bookExpert from '../assets/diamond-expert.jpg';
import PageBlurb from '../components/page-blurb/page-blurb';

function Book() {

    return (
        <div className='-fade-in'>
            <Hero image={bookImage}></Hero>
            <PageBlurb 
            title="we are here to help you"
            paragraph="Whether you’re searching for the perfect engagement ring, personalising a wedding band, or celebrating a milestone with an unforgettable gift, The Pink Panther’s Diamond Experts are here to guide you. Every consultation is tailored to your needs."
            link=""
            url=""
            />
            <SplitContent 
                image={bookExpert} 
                title="ask a diamond expert"
                text= "Our Diamond Experts can help you choose a diamond engagement ring or diamond jewellery. Building upon our legacy of showcasing the world’s most beautiful gemstones, they can share the origin of select The Pink Panther diamonds and the details that make a The Pink Panther diamond shine above all others."
            />
        </div>
    );
}

export default Book;