import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Branches from "./Branches";
import { useState } from "react";
import BookingPage from "../Booking/BookingPage";
function Main() {
  const [bookingModal, setBookingModal] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <>
      {bookingModal ? (
        <BookingPage availableTimes={availableTimes}> </BookingPage>
      ) : (
        <>
          <Hero></Hero>
          <Specials></Specials>
          <Testimonials></Testimonials>
          <Branches></Branches>
        </>
      )}
    </>
  );
}

export default Main;
