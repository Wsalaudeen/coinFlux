import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>CoinFlux</h1>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
      <div className="nav-right">
        {/* for screen readers */}
        <label htmlFor="currency-select" className="visually-hidden">
          Select Currency
        </label>
        <select id="currency-select">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ngn">NGN</option>
        </select>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
