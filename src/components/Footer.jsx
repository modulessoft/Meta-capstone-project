import React from "react";
import logo from "../assets/icons_assets/Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
      </ul>
      <ul>
        <li>
          <strong>Doormat Navigation</strong>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Contact</strong>
        </li>
        <li>Address</li>
        <li>Phone Number</li>
        <li>E-mail</li>
      </ul>
      <ul>
        <li>
          <strong>Social Media Links</strong>
        </li>
        <li>Address</li>
        <li>Phone Number</li>
        <li>E-mail</li>
      </ul>
    </footer>
  );
}

export default Footer;
