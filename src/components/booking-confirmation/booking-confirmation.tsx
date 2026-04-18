import "./booking-confirmation.scss";

interface BookingConfirmation {
  date: Date | undefined;
}

export default function BookingConfirmation({ date }: BookingConfirmation) {
  return (
    <div>
      <h2>Thanks for booking</h2>
      <p>
        We'll be waiting for you on{" "}
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
