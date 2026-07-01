import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/Logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          {/* Left Desktop Menu */}
          <ul className="nav-menu left-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Right Desktop Menu */}
          <ul className="nav-menu right-menu">
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="mobile-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
