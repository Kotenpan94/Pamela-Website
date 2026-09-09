import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>Contact</h4>
            <a href="mailto:pamelagoldsteenlcsw@gmail.com">pamelagoldsteenlcsw@gmail.com</a>
            <a href="tel:+12016144031">(201) 614-4031</a>
            <p>Free 15-minute consultation available</p>
          </div>
          <div>
            <h4>Office</h4>
            <p>70 Park Street, Suite 206<br />Montclair, NJ 07042</p>
            <p>In-person &amp; telehealth throughout NJ &amp; NY</p>
          </div>
          <div id="fees">
            <h4>Fees</h4>
            <p>Individual sessions &mdash; $275 / 50 min</p>
            <p>Out-of-network; superbills provided</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Pamela Goldsteen, LCSW. All rights reserved.</span>
          <nav aria-label="Footer">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
