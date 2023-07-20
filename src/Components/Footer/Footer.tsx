import google from "../../Images/Footer/googleplay.png";
import apple from "../../Images/Footer/appstore.png";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-box__top">
            <div className="footer-box__top--1row">
              <div className="footer-box__top--1row--img">
                <img src={google} alt="google" />
              </div>
              <div className="footer-box__top--1row--img">
                <img src={apple} alt="apple" />
              </div>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">Trainings</li>
                <li>
                  <a href="url">Free trial training</a>
                </li>
                <li>
                  <a href="url">All trainings</a>
                </li>
                <li>
                  <a href="url">All trainers</a>
                </li>
              </ul>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">
                  Additional info
                </li>
                <li>
                  <a href="url">All Clubs</a>
                </li>
                <li>
                  <a href="url">Prices</a>
                </li>
                <li>
                  <a href="url">News & Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">Company</li>
                <li>
                  <a href="url">Contacts</a>
                </li>
                <li>
                  <a href="url">Carrer</a>
                </li>
              </ul>
            </div>
            <div className="footer-box__top--1col">
              <ul>
                <li className="footer-box__top--1col--title">Connect</li>
                <li>
                  <a href="url">Instagram</a>
                </li>
                <li>
                  <a href="url">Facebook</a>
                </li>
                <li>
                  <a href="url">Email us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-box__bottom">
            <div className="footer-box__bottom--1row">
              <p>© Iron Gym. 2023</p>
              <a href="url">Terms of Services</a>
              <a href="url">Privacy Policy</a>
              <a href="url">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
