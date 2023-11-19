import React, { useReducer } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Branches from "./Branches";
import { useState } from "react";
import BookingPage from "../Booking/BookingPage";
function Main() {
  const [bookingModal, setBookingModal] = useState(false);
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  function updateTimes(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { availableTimes: state.availableTimes + 1 };
      default:
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
  }
  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  initializeTimes();
  return (
    <>
      {bookingModal ? (
        <BookingPage
          dispatchAvailableTimes={dispatchAvailableTimes}
          availableTimes={availableTimes}
          setBookingModal={setBookingModal}
        ></BookingPage>
      ) : (
        <>
          <Hero setBookingModal={setBookingModal}></Hero>
          <Specials></Specials>
          <Testimonials></Testimonials>
          <Branches></Branches>
        </>
      )}
    </>
  );
}

export default Main;
