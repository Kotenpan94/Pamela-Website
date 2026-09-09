import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <NavLink to="/" className="wordmark">
          Pamela Goldsteen
          <span>LCSW &middot; SEP &middot; Somatic Psychotherapy</span>
        </NavLink>
        <nav className="primary-nav" aria-label="Primary">
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/fees">Fees</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
