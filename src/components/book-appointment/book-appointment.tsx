import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DayPicker } from "react-day-picker";
import BookingForm from "../booking-form/booking-form";
import BookingConfirmation from "../booking-confirmation/booking-confirmation";
import "react-day-picker/src/style.css";
import "./book-appointment.scss";

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [booked, setBooked] = useState(false);

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedDate) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedDate]);

  return (
    <AnimatePresence mode="wait">
      <div className="pinkpanther-book-appointment-wrapper">
        {!booked && (
          <motion.div
            key="booking"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pinkpanther-book-appointment"
          >
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
                animate={true}
                weekStartsOn={1}
                disabled={{ dayOfWeek: [0, 7] }}
              />

              <div ref={formRef}>
                <BookingForm
                  setBooked={setBooked}
                  selectedDate={selectedDate}
                />
              </div>
            </div>
          </motion.div>
        )}

        {booked && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <BookingConfirmation date={selectedDate} />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
