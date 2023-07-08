import { useState } from "react";
import Carousel from "../Carousel";

function Locations() {

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
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;