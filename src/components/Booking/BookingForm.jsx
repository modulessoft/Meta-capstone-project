import React, { useEffect, useState } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes, submitData }) {
  const [errors, setErrors] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [occasion, setOccasion] = useState();
  function isValidDateFormat(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime()); // Check if the date is valid
  }
  const isValidTimeFormat = (timeString) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM format

    return timeRegex.test(timeString);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm({ date, time, numberOfGuests, occasion }))
      submitData({ date, time, numberOfGuests, occasion });
  };
  const validateForm = (form) => {
    setErrors((prevErrors) =>
      prevErrors.filter(function (e) {
        return (
          e !== "Please add more than 0 guests" &&
          e !== "Please add a correct time" &&
          e !== "Please add a correct date"
        );
      })
    );
    if (form.numberOfGuests < 1) {
      setErrors((prevErrors) => [
        ...prevErrors,
        "Please add more than 0 guests",
      ]);
      return false;
    }
    if (!isValidTimeFormat(form.time)) {
      setErrors((prevErrors) => [...prevErrors, "Please add a correct time"]);
      return false;
    }
    if (!isValidDateFormat(form.date)) {
      setErrors((prevErrors) => [...prevErrors, "Please add a correct date"]);
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (date || time || numberOfGuests || occasion)
      validateForm({ date, time, numberOfGuests, occasion });
  }, [date, time, numberOfGuests, occasion]);
  return (
    <>
      {errors[0] && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
      )}
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
            availableTimes.map((time, key) => (
              <option key={key}>{time}</option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
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
          className={`btn ${errors[0] && "disabled"}`}
          aria-label="Make Your reservation"
        />
      </form>
    </>
  );
}

export default BookingForm;
