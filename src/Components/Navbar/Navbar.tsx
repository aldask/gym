import React, { useState } from "react";
import Logo from "../../Images/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
    document.body.classList.toggle("menu-active");
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__links--text">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <ul className="navbar__links__desktop">
          <li>
            <Link to="/prices" className="navbar__links--text">
              PRICES
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__links--text">
              TRAININGS
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__links--text">
              ABOUT US
            </Link>
          </li>
        </ul>
        <div className="navbar__links__hamburger" onClick={handleMobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`navbar__links__mobile ${mobileNav ? "active" : ""}`}>
          <li>
            <Link to="/prices" className="navbar__links--text">
              PRICES
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__links--text">
              TRAININGS
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__links--text">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>
      {mobileNav && (
        <div className="navbar__overlay" onClick={handleMobileNav}></div>
      )}
    </nav>
  );
}

export default Navbar;
