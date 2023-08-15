import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

function Locations() {
  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  return (
    <section className="locations">
      <div className="container">
        <div className="locations__box">
          <div className="locations__box__side1">
            <h2 className="locations__box__side1__title">
              FIND NEAREST GYM THAT SUITS YOU BEST
            </h2>
            <p className="locations__box__side1__text">
              A variety of locations in Lithuania. Gym clubs are situated in
              easy-to-find public places with 24/7 access.
            </p>
            <div className="locations__box__side1__buttons">
              <Link to="/gyms" onClick={handleLinkClick}>
                <button className="locations__box__side1__buttons--explore">
                  Explore
                </button>
              </Link>
              <Link to="/" onClick={handleLinkClick}>
                <button className="locations__box__side1__buttons--join">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
          <div className="locations__box__side2">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
