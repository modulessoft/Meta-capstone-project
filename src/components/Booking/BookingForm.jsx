import React, { useState } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes, submitData }) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [occasion, setOccasion] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion });
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="booking-form"
      aria-labelledby="booking-form-heading"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => {
          dispatchAvailableTimes(e.target.value);
          setDate(e.target.value);
        }}
        aria-label="Choose date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
        aria-label="Choose time"
      >
        {availableTimes[0] &&
          availableTimes.map((time, key) => <option key={key}>{time}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => {
          setNumberOfGuests(e.target.value);
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
