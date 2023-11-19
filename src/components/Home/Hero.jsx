import React from "react";
import image from "../../assets/icons_assets/restaurant.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="px-2 mb-2">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sed
          rerum modi eveniet, doloremque alias libero similique eius. Nulla
          tenetur dolores sequi assumenda quaerat molestiae hic similique
          aperiam! Ipsam, ratione.
        </p>
        <Link to="/Booking" className="btn">
          Reserve a Table
        </Link>
      </div>
      <div className="px-2">
        <img src={image} alt="restaurant" width="100%" />
      </div>
    </section>
  );
}

export default Hero;
