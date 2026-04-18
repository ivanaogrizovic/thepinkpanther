import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/src/style.css";
import "./book-appointment.scss";
import BookingForm from "../booking-form/booking-form";
import BookingConfirmation from "../booking-confirmation/booking-confirmation";

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [booked, setBooked] = useState(false);

  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="pinkpanther-book-appointment-wrapper">
      {!booked && (
        <div className="pinkpanther-book-appointment">
          <h2>Pick a day. We’ll bring the sparkle.</h2>
          <p>
            Book a private appointment and we’ll guide you through every detail:
            from style to stone you can choose something truly personal,
            meaningful, and unforgettable.
          </p>
          <div className="pinkpanther-book-appointment-picker">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              animate={true}
              weekStartsOn={1}
              disabled={{ dayOfWeek: [0, 7] }}
            />
            <BookingForm setBooked={setBooked} selectedDate={selectedDate} />
          </div>
        </div>
      )}
      {booked && <BookingConfirmation date={selectedDate} />}
    </div>
  );
}
