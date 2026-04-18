import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import "./book-appointment.scss";
import BookingForm from "../booking-form/booking-form";
import BookingConfirmation from "../booking-confirmation/booking-confirmation";

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [booked, setBooked] = useState(false);

  return (
    <div className="pinkpanther-book-appointment-wrapper">
      <div className="pinkpanther-book-appointment">
        {!booked && (
          <>
            <h2>Pick a day. We’ll bring the sparkle.</h2>
            <p>
              Book a private appointment and we’ll guide you through every
              detail: from style to stone you can choose something truly
              personal, meaningful, and unforgettable.
            </p>
            <div className="pinkpanther-book-appointment-picker">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
              {selectedDate && (
                <BookingForm
                  setBooked={setBooked}
                  selectedDate={selectedDate}
                />
              )}
            </div>
          </>
        )}
        {booked && <BookingConfirmation date={selectedDate} />}
      </div>
    </div>
  );
}
