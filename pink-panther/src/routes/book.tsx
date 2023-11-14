import React from 'react';
import HeroImage from '../components/hero-image/hero-image';
import bookImage from '../assets/book-hero.webp';
import Slideshow from '../components/slideshow/slideshow';
import bookExpert from '../assets/diamond-expert.webp';
import AppointmentSection from '../components/appointment-section/appointment-section';

function Book() {

    const slideTitle = "ask a diamond expert";
    const slideText = "Our Diamond Experts can help you choose a diamond engagement ring or diamond jewellery. Building upon our legacy of showcasing the world’s most beautiful gemstones, they can share the origin of select The Pink Panther diamonds and the details that make a The Pink Panther diamond shine above all others.";


    return (
        <div className='fade-in'>
            <HeroImage image={bookImage}></HeroImage>
            <AppointmentSection />
            <Slideshow image={bookExpert} title={slideTitle} text={slideText} />
            <div className='bottom-margin'></div>
        </div>
    );
}

export default Book;