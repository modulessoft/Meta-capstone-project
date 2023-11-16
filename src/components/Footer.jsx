import React from "react";

function Footer() {
  return (
    <footer style={{ display: "flex", flexDirection: "column" }}>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
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
        </li>
        <li>
          <ul>
            <li>
              <strong>Contact</strong>
            </li>
            <li>Address</li>
            <li>Phone Number</li>
            <li>E-mail</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <strong>Social Media Links</strong>
            </li>
            <li>Address</li>
            <li>Phone Number</li>
            <li>E-mail</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
