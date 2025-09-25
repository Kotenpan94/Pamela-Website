import React from "react";
import "./navbar.css";

const Navbar = ({ active, onNav }) => {
  const go = (id) => (e) => {
    e.preventDefault(); // stop anchor jump
    onNav(id); // tell App which section to show
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Pamela Goldsteen, LCSW</div>
      <ul className="nav-links">
        <li>
          <a
            href="#hero"
            onClick={go("hero")}
            aria-current={active === "hero" ? "page" : undefined}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={go("about")}
            aria-current={active === "about" ? "page" : undefined}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={go("services")}
            aria-current={active === "services" ? "page" : undefined}
          >
            My Approach
          </a>
        </li>
        <li>
          <a
            href="#rates"
            onClick={go("rates")}
            aria-current={active === "rates" ? "page" : undefined}
          >
            Rates and Insurance
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={go("contact")}
            aria-current={active === "contact" ? "page" : undefined}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
