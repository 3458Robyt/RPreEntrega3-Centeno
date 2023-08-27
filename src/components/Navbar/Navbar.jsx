import React from "react";
import { Link } from "react-router-dom";
import CartLogo from "../CartLogo/CartLogo";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <h3>E-Commerce</h3>
      <div className="linksNav">
        <h5>
          <Link to={"/"}>Home</Link>
        </h5>
        <h5>
        </h5>
      </div>
      <CartLogo />
    </div>
  );
}
