import React, { useContext } from "react";
import "./Navbar.css";
import { CoinContext } from "../../context/Coincontext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "£" });
        break;
      }
      case "ngn": {
        setCurrency({ name: "ngn", symbol: "₦" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1 className="logo">CoinFlux</h1>{" "}
      </Link>

      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        {/* for screen readers */}
        <label htmlFor="currency-select" className="visually-hidden">
          Select Currency
        </label>
        <select id="currency-select" onChange={currencyHandler}>
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
