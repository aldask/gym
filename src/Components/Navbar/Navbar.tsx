import React, { useState } from "react";
import Logo from "../../Images/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
    document.body.classList.toggle("menu-active");
    console.log(mobileNav);
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar__links">
        <ul className="navbar__links__desktop">
          <li>
            <a href="button">
              <p className="navbar__links--text">PRICES</p>
            </a>
          </li>
          <li>
            <a href="button">
              <p className="navbar__links--text">TRAININGS</p>
            </a>
          </li>
          <li>
            <a href="button">
              <p className="navbar__links--text">ABOUT US</p>
            </a>
          </li>
        </ul>
        <div className="navbar__links__hamburger" onClick={handleMobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`navbar__links__mobile ${mobileNav ? "active" : ""}`}>
          <li>
            <a href="button">
              <p className="navbar__links--text">PRICES</p>
            </a>
          </li>
          <li>
            <a href="button">
              <p className="navbar__links--text">TRAININGS</p>
            </a>
          </li>
          <li>
            <a href="button">
              <p className="navbar__links--text">ABOUT US</p>
            </a>
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
