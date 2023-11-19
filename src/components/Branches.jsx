import React from "react";
import imageA from "../assets/icons_assets/Mario and Adrian A.jpg";
import imageB from "../assets/icons_assets/Mario and Adrian b.jpg";
function Branches() {
  return (
    <section className="branches">
      <div className="px-2 mb-2">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sed
          rerum modi eveniet, doloremque alias libero similique eius. Nulla
          tenetur dolores sequi assumenda quaerat molestiae hic similique
          aperiam! Ipsam, ratione.
        </p>
      </div>
      <div className="px-2">
        <img src={imageB} alt="restaurant" width="50%" />
        <img src={imageA} alt="restaurant" width="50%" className="overlay" />
      </div>
    </section>
  );
}

export default Branches;
