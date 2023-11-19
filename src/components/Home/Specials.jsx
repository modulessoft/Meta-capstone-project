import React from "react";
import greekSalad from "../../assets/icons_assets/greek salad.jpg";
import bruchetta from "../../assets/icons_assets/bruchetta.svg";
import lemonDessert from "../../assets/icons_assets/lemon dessert.jpg";
import basket from "../../assets/icons_assets/Basket.svg";

function Specials() {
  return (
    <section className="specials">
      <header>
        <h2>Specials</h2>
        <button className="btn">Online Menu</button>
      </header>
      <div className="specials__body">
        <div className="card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="card-header">
            <h3>Greek Salad</h3>
            <span className="price">$12.99</span>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus reiciendis asperiores quos qui tempore iste ipsum
              libero
            </p>
            <a href="">
              Order a delivery
              <img src={basket} alt="basket" className="icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={bruchetta} alt="Bruchetta" />
          <div className="card-header">
            <h3>Bruchetta</h3>
            <span className="price">$12.99</span>
          </div>
          <div className="card-body">
            <p>
              Ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
              reiciendis asperiores quos qui tempore iste ipsum libero
            </p>
            <a href="">
              Order a delivery
              <img src={basket} alt="basket" className="icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-header">
            <h3>Lemon Dessert</h3>
            <span className="price">$12.99</span>
          </div>
          <div className="card-body">
            <p>
              Dolor sit amet consectetur adipisicing elit. Necessitatibus
              reiciendis asperiores quos qui tempore iste ipsum libero
            </p>
            <a href="">
              Order a delivery
              <img src={basket} alt="basket" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
