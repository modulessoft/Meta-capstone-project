import React from "react";
import image from "../assets/icons_assets/restaurant.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="px-2 mb-2">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sed
          rerum modi eveniet, doloremque alias libero similique eius. Nulla
          tenetur dolores sequi assumenda quaerat molestiae hic similique
          aperiam! Ipsam, ratione.
        </p>
        <button className="btn">Reserve a Table</button>
      </div>
      <div className="px-2">
        <img src={image} alt="restaurant" width="100%" />
      </div>
    </section>
  );
}

export default Hero;
