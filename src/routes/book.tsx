import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import bookImage from "../assets/book-hero.webp";
import BookingProcess from "../components/booking-process/booking-process";
import FullWdithCta from "../components/full-width-cta/full-width-cta";

import { useState } from "react";
import BookAppointment from "../components/book-appointment/book-appointment";

export default function Book() {
  return (
    <div className="-fade-in">
      <Header text="We are here to help" title="Book an appointment" />
      <BookAppointment />
      <BookingProcess />
    </div>
  );
}
