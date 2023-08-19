import google from "../../Images/Footer/googleplay.png";
import apple from "../../Images/Footer/appstore.png";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  return (
    <section className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-box__logos">
            <div className="footer-box__logos--img">
              <a href="https://google.com/">
                <img src={google} alt="google-store" />
              </a>
            </div>
            <div className="footer-box__logos--img">
              <a href="https://apple.com/">
                <img src={apple} alt="apple-store" />
              </a>
            </div>
          </div>
          <div className="footer-box__top">
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">Trainings</li>
                <li>
                  <Link to="/trial" onClick={handleLinkClick}>
                    Free trial training
                  </Link>
                </li>
                <li>
                  <Link to="/trainings" onClick={handleLinkClick}>
                    All trainings
                  </Link>
                </li>
                <li>
                  <Link to="/coaches" onClick={handleLinkClick}>
                    All coaches
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">
                  Additional info
                </li>
                <li>
                  <Link to="/gyms" onClick={handleLinkClick}>
                    All Gyms
                  </Link>
                </li>
                <li>
                  <Link to="/prices" onClick={handleLinkClick}>
                    Prices
                  </Link>
                </li>
                <li>
                  <Link to="/news" onClick={handleLinkClick}>
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">Company</li>
                <li>
                  <Link to="/about" onClick={handleLinkClick}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/career" onClick={handleLinkClick}>
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">Connect</li>
                <li>
                  <a href="https://www.instagram.com/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">Facebook</a>
                </li>
                <li>
                  <a href="mailto:hello@irongym.com">Email us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-box__bottom">
            <div className="footer-box__bottom--1row">
              <p>© Iron Gym. {currentYear}</p>
              <Link to="/" onClick={handleLinkClick}>
                Terms of Services
              </Link>
              <Link to="/" onClick={handleLinkClick}>
                Privacy Policy
              </Link>
              <Link to="/" onClick={handleLinkClick}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
