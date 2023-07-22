import Logo from "../../Images/Logo/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="button">
            <p>PRICES</p>
          </a>
        </li>
        <li>
          <a href="button">
            <p>TRAININGS</p>
          </a>
        </li>
        <li>
          <a href="button">
            <p>ABOUT US</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
