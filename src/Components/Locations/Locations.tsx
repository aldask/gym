import { useState } from "react";
import pilaite from "../../Images/Locations/pilaite.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Slider";

function Locations() {
  const sliders = [
    {
      locationPic: pilaite,
      gymName: "Pilaite",
      gymStreet: "axcvxcvxcvs",
      gymPerks: "perks here",
    },
    {
      locationPic: pilaite,
      gymName: "tessss",
      gymStreet: "asdasdasd",
      gymPerks: "perks here",
    },
    {
      locationPic: pilaite,
      gymName: "Pdasdae",
      gymStreet: "aadsasd",
      gymPerks: "perks here",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliders.length) % sliders.length
    );
  };

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
              <button className="locations__box__side1__buttons--explore">
                Explore
              </button>
              <button className="locations__box__side1__buttons--join">
                Join Us
              </button>
            </div>
          </div>
          <div className="locations__box__side2">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={prevSlide}
            />
            <div
              className="locations__box__side2__slider-wrapper"
              style={{ transform: `translateX(-${450 * currentSlide}px)` }}
            >
              {sliders.map((slider, index) => (
                <Slider
                  key={index}
                  locationPic={slider.locationPic}
                  gymName={slider.gymName}
                  gymStreet={slider.gymStreet}
                  gymPerks={slider.gymPerks}
                  active={index === currentSlide}
                />
              ))}
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
