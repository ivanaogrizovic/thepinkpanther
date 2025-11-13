import Hero from '../components/hero/hero';
import bookImage from '../assets/book-hero.webp';
import SplitContent from '../components/split-content/split-content';
import bookExpert from '../assets/diamond-expert.jpg';
import PageBlurb from '../components/page-blurb/page-blurb';
import BookingProcess from '../components/booking-process/booking-process';
import FullWdithCta from '../components/full-width-cta/full-width-cta';

function Book() {

    return (
        <div className='-fade-in'>
            <Hero image={bookImage}></Hero>
            <FullWdithCta 
                title="we are here to help you"
                text="Whether you’re searching for the perfect engagement ring, personalising a wedding band, or celebrating a milestone with an unforgettable gift, The Pink Panther’s Diamond Experts are here to guide you. Every consultation is tailored to your needs."
                linkText=""
                link=""
            />
            <BookingProcess/>
        </div>
    );
}

export default Book;