import React, { useEffect, useReducer } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Branches from "./Branches";
import { useState } from "react";
import BookingPage from "../Booking/BookingPage";
import { fetchAPI, submitAPI } from "../../assets/mockAPI";

function Main() {
  const [bookingModal, setBookingModal] = useState(false);

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) setBookingModal(false);
  };
  return (
    <>
      {bookingModal ? (
        <BookingPage
          dispatchAvailableTimes={dispatchAvailableTimes}
          availableTimes={availableTimes}
          setBookingModal={setBookingModal}
          submitData={submitData}
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
