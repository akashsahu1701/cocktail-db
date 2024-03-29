import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={Logo} alt="cocktail" className="logo"/>
          <ul className="nav-links">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}
