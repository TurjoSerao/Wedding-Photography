import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/Logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
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
        <div className="logo">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
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
      </nav>
    </header>
  );
}

export default Header;
