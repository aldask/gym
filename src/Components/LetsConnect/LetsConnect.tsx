import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  faSquarePhoneFlip,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

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
                <div>
                  <a href="mailto:hello@irongym.com">hello@irongym.com</a>
                </div>
              </div>
              <div className="connect-box__bottom--side1--phone">
                <div className="connect-box__bottom--side1--phone--logo">
                  <FontAwesomeIcon icon={faSquarePhoneFlip} />
                </div>
                <div>
                  <a href="tel:86123">86123</a>
                </div>
              </div>
              <div className="connect-box__bottom--side1--company">
                <div className="connect-box__bottom--side1--company--logo">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <div>
                  <p>stuff about company</p>
                </div>
              </div>
            </div>
            <div className="connect-box__bottom--side2">contact form here</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LetsConnect;
