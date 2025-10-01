import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Pamela Goldsteen, LCSW</div>
      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">My Approach</a>
        </li>
        <li>
          <a href="#rates">Rates and Insurance</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
