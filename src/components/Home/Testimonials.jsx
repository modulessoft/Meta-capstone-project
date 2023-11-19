import React from "react";
import Rating from "./Rating";
import avatar1 from "../../assets/avatars/1.jpg";
import avatar2 from "../../assets/avatars/2.jpg";
import avatar3 from "../../assets/avatars/3.jpg";
import avatar4 from "../../assets/avatars/4.jpg";

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Testimonials Section">
      <h2>Testimonials</h2>
      <div className="body">
        <div className="card" aria-label="Testimonial 1">
          <Rating rate="4" />
          <div className="person">
            <img src={avatar1} alt="avatar" className="avatar" />
            <span aria-label="John Doe">John Doe</span>
          </div>
          <p className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            porro ipsum dolores dolor cum non tenetur, possimus quos
          </p>
        </div>

        <div className="card" aria-label="Testimonial 2">
          <Rating rate="4" />
          <div className="person">
            <img src={avatar2} alt="avatar" className="avatar" />
            <span aria-label="John Doe">John Doe</span>
          </div>
          <p className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="card" aria-label="Testimonial 3">
          <Rating rate="4" />
          <div className="person">
            <img src={avatar3} alt="avatar" className="avatar" />
            <span aria-label="John Doe">John Doe</span>
          </div>
          <p className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>

        <div className="card" aria-label="Testimonial 4">
          <Rating rate="4" />
          <div className="person">
            <img src={avatar4} alt="avatar" className="avatar" />
            <span aria-label="John Doe">John Doe</span>
          </div>
          <p className="review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            porro ipsum dolores dolor cum non tenetur, possimus quos
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
