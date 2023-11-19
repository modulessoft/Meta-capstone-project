import React from "react";
import BookingForm from "./BookingForm";
import Header from "../Header/Header";
import Nav from "../Header/Nav";

function BookingPage() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <div className="booking-page-container">
        <div className="booking-page-content">
          <h2>Reservation Form</h2>
          <p>Fill out the form below to make your reservation.</p>
          <BookingForm />
        </div>
      </div>
    </>
  );
}

export default BookingPage;
