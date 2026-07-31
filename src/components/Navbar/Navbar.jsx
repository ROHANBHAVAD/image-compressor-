import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        <Link to="/" className="logo">
          Compressify
        </Link>

        <nav>

          <ul className="nav-links">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Privacy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Terms
              </NavLink>
            </li>

          </ul>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;