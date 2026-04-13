import Hero from "../components/hero/hero";
import bookImage from "../assets/book-hero.webp";
import BookingProcess from "../components/booking-process/booking-process";
import FullWdithCta from "../components/full-width-cta/full-width-cta";

export default function Book() {
  return (
    <div className="-fade-in">
      <FullWdithCta
        title="we are here to help you"
        text="Whether you’re searching for the perfect engagement ring, personalising a wedding band, or celebrating a milestone with an unforgettable gift, The Pink Panther’s Diamond Experts are here to guide you. Every consultation is tailored to your needs."
        linkText=""
        link=""
      />
      <BookingProcess />
    </div>
  );
}
