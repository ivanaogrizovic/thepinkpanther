import { useState } from "react";
import Button from "../button/button";
import "./booking-form.scss";

interface BookingFormProps {
  selectedDate: Date;
  setBooked: React.Dispatch<React.SetStateAction<boolean>>;
}

const timeSlots = ["10:00", "13:00", "16:00"];

export default function BookingForm({
  selectedDate,
  setBooked,
}: BookingFormProps) {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking submitted (simulated)");
    setBooked(true);
  };

  return (
    <form className="pinkpanther-booking-form" onSubmit={handleSubmit}>
      <h3>
        Book for{" "}
        {selectedDate.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </h3>
      <div className="pinkpanther-booking-time-container">
        <h4 className="pinkpanther-booking-time-label">Pick a time</h4>

        <div className="pinkpanther-booking-form-times">
          {timeSlots.map((time) => (
            <label key={time} className="">
              <input
                type="radio"
                name="time"
                value={time}
                checked={selectedTime === time}
                onChange={() => setSelectedTime(time)}
              />
              {time}
            </label>
          ))}
        </div>
      </div>
      <div className="pinkpanther-booking-form-fields">
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="pinkpanther-booking-form-fields">
        <textarea
          placeholder="Anything you'd like us to know?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        theme="tertiary"
        type="submit"
        disabled={!selectedTime || !fullName}
        onClick={() => console.log("Submitted")}
      >
        Confirm booking
      </Button>
    </form>
  );
}
