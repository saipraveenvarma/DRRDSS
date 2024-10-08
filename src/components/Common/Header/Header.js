import React, { useState } from "react";
import "./Header.css";

const Header = ({
  onCyloneClick,
  onLandslideClick,
  onEarthquakeClick,
  onCityfireClick,
  onRoadaccidentsClick,
  onFloodClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const handleLogoClick = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page smoothly
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
            <span className="nav-btn" onClick={onCyloneClick}>Cyclone</span>
            <span className="nav-btn" onClick={onLandslideClick}>Landslide</span>
            <span className="nav-btn" onClick={onEarthquakeClick}>Earthquake</span>
            <span className="nav-btn" onClick={onCityfireClick}>City Fire</span>
            <span className="nav-btn" onClick={onRoadaccidentsClick}>Road Accidents</span>
            <span className="nav-btn" onClick={onFloodClick}>Flood</span>
          </div>
          <div className="login-signup">
            <span className="login-btn">Login</span>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </div>
      </header>
      {/* Scroll to Top Icon - Placed outside of Header to allow bottom positioning */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i> {/* Font Awesome arrow icon */}
      </div>
    </>
  );
};

export default Header;