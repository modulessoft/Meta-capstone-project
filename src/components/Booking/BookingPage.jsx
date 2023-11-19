import React from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <div className="booking-page-container">
      <div className="booking-page-content">
        <h2>Reservation Form</h2>
        <p>Fill out the form below to make your reservation.</p>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingPage;
