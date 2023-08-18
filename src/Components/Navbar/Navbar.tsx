import React, { useState, useEffect } from "react";
import Logo from "../../Images/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
  }

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [mobileNav]);

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="logo" onClick={handleLinkClick} />
        </Link>
      </div>
      <div className="navbar__links">
        <ul className="navbar__links__desktop">
          <li>
            <Link
              to="/prices"
              className="navbar__links--text"
              onClick={handleLinkClick}
            >
              PRICES
            </Link>
          </li>
          <li>
            <Link
              to="/trainings"
              className="navbar__links--text"
              onClick={handleLinkClick}
            >
              TRAININGS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="navbar__links--text"
              onClick={handleLinkClick}
            >
              ABOUT US
            </Link>
          </li>
        </ul>
        <div className="navbar__links__hamburger" onClick={handleMobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`navbar__links__mobile ${mobileNav ? "active" : ""}`}>
          <li>
            <Link
              to="/prices"
              className="navbar__links--text"
              onClick={handleLinkClick}
            >
              PRICES
            </Link>
          </li>
          <li>
            <Link
              to="/trainings"
              className="navbar__links--text"
              onClick={handleLinkClick}
            >
              TRAININGS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="navbar__links--text"
              onClick={handleLinkClick}
            >
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
