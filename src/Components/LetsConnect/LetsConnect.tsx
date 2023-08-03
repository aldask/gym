import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  faSquarePhoneFlip,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import InputForm from "./InputForm";

function LetsConnect() {
  return (
    <section className="connect">
      <div className="container">
        <div className="connect-box">
          <div className="connect-box__top">
            <h1>LET’S CONNECT</h1>
            <p>Feel free to contact us & ask your questions personally.</p>
          </div>
          <div className="connect-box__bottom">
            <div className="connect-box__bottom--side1">
              <div className="connect-box__bottom--side1--email">
                <div className="connect-box__bottom--side1--email--logo">
                  <FontAwesomeIcon icon={faSquareEnvelope} />
                </div>
                <div className="connect-box__bottom--side1--email--button">
                  <a href="mailto:hello@irongym.com">hello@irongym.com</a>
                </div>
              </div>
              <div className="connect-box__bottom--side1--phone">
                <div className="connect-box__bottom--side1--phone--logo">
                  <FontAwesomeIcon icon={faSquarePhoneFlip} />
                </div>
                <div className="connect-box__bottom--side1--email--button">
                  <div className="connect-box__bottom--side1--email--button--days">
                    <p>
                      <span className="strong">Call center open:</span>
                    </p>
                    <p>I-V 8:00-21:00</p>
                    <p>VI-VII 10:00-15:00</p>
                  </div>
                  <a href="tel:86123">86123</a>
                </div>
              </div>
              <div className="connect-box__bottom--side1--company">
                <div className="connect-box__bottom--side1--company--logo">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <div>
                  <p>
                    <span className="strong">UAB „Gym LT“</span>
                  </p>
                  <p>Įm.k. 303472404</p>
                  <p>PVM m.k. LT100009044519</p>
                  <p>Antakalnio g. 37, LT 10312, Vilnius</p>
                </div>
              </div>
            </div>
            <div className="connect-box__bottom--side2">
              <h2>Fill out the form and we will be in touch!</h2>
              <form className="connect-box__bottom--side2--form">
                <InputForm
                  label="Name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  minLength={3}
                  maxLength={36}
                />
                <InputForm
                  label="Email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@provider.com"
                  minLength={3}
                  maxLength={36}
                />
                <InputForm
                  label="Phone Number"
                  type="tel"
                  name="telnumber"
                  required
                  placeholder="+3706..."
                  pattern="^\+3706[0-9]{8}$"
                  minLength={12}
                  maxLength={12}
                />
                <label>Message</label>
                <textarea
                  maxLength={256}
                  placeholder="Enter Your Message"
                  required
                />
              </form>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LetsConnect;
