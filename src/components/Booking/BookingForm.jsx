import React, { useState } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes }) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();
  return (
    <form className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => {
          dispatchAvailableTimes({ type: "INCREMENT" });
        }}
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
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" className="btn" />
    </form>
  );
}

export default BookingForm;
