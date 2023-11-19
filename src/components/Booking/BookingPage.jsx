import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({
  availableTimes,
  setBookingModal,
  dispatchAvailableTimes,
}) {
  return (
    <>
      <div className="booking-page-container">
        <div className="booking-page-content">
          <button
            onClick={() => setBookingModal(false)}
            style={{
              float: "right",
              padding: "4px 8px",
              backgroundColor: "red",
              color: "white",
            }}
            className="btn"
          >
            x
          </button>
          <h2>Reservation Form</h2>
          <p>Fill out the form below to make your reservation.</p>
          <BookingForm
            availableTimes={availableTimes}
            dispatchAvailableTimes={dispatchAvailableTimes}
          />
        </div>
      </div>
    </>
  );
}

export default BookingPage;
