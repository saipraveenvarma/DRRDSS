import React, { useState } from "react";
import "./Header.css";

const Header = ({ onCyloneClick, onLandslideClick }) => { // Accept the prop for Landslide
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const handleLogoClick = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <>
      <header>
        <div className="header-logo" onClick={handleLogoClick}>
          <a href="/">
            <img src="/Flag-of-East-Timor.webp" alt="Logo" />
          </a>
        </div>
        <div className={`header-right ${menuOpen ? "open" : ""}`}>
          <div className="nav-buttons">
            <span className="nav-btn" onClick={onCyloneClick}>Cyclone</span> {/* Use the passed handler */}
            <span className="nav-btn" onClick={onLandslideClick}>Landslide</span> {/* Use the passed handler */}
            <span className="nav-btn">Earthquake</span>
            <span className="nav-btn">City Fire</span>
            <span className="nav-btn">Road Accidents</span>
            <span className="nav-btn">Flood</span>
          </div>
          <div className="login-signup">
            <span className="login-btn">Login</span>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </div>
      </header>
    </>
  );
};

export default Header;