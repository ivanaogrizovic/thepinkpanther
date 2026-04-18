import "./booking-confirmation.scss";

interface BookingConfirmation {
  date: Date | undefined;
}

export default function BookingConfirmation({ date }: BookingConfirmation) {
  return (
    <div className="pinkpanther-booking-confirmation">
      <h2>Booking Confirmed</h2>
      <p>
        Thank you for booking with us. We'll be waiting for you on{" "}
        {date?.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
        .
      </p>
      <p>
        In the meantime, check out our guide on finding your perfect match
        below.
      </p>
    </div>
  );
}
