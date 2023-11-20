import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "green" }}>Booking Confirmed!</h2>
      <p>
        Your reservation has been confirmed. Thank you for choosing our
        restaurant!
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default ConfirmedBooking;
