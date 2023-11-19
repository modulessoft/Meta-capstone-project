import React, { useState } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes }) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  return (
    <form className="booking-form" aria-labelledby="booking-form-heading">
      <h2 id="booking-form-heading">Reservation Form</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
        aria-label="Choose date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => {
          dispatchAvailableTimes({ type: "INCREMENT" });
        }}
        aria-label="Choose time"
      >
        {availableTimes.map((time, key) => (
          <option key={key}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => {
          setGuests(e.target.value);
        }}
        aria-label="Number of guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        aria-label="Choose occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        className="btn"
        aria-label="Make Your reservation"
      />
    </form>
  );
}

export default BookingForm;
