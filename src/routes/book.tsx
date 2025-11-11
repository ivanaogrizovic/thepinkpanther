import Hero from '../components/hero/hero';
import bookImage from '../assets/book-hero.webp';
import SplitContent from '../components/split-content/split-content';
import bookExpert from '../assets/diamond-expert.jpg';
import PageBlurb from '../components/page-blurb/page-blurb';
import BookingProcess from '../components/booking-process/booking-process';

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
            <BookingProcess/>
        </div>
    );
}

export default Book;