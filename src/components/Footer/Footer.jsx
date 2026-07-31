import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-top">

          <h2>Compressify</h2>

          <p>
            Free online image compression tool that helps reduce image size
            while maintaining excellent quality.
          </p>

        </div>

        <div className="footer-links">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/privacy">Privacy Policy</Link>

          <Link to="/terms">Terms & Conditions</Link>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Compressify. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;