import React, { useState } from "react";
import Slide from "./Slide";
import { gyms } from "../../Data/gymsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    setActiveIndex(Math.max(0, Math.min(newIndex, gyms.length - 1)));
  };

  const renderIndicators = () =>
    gyms.map((_, index) => (
      <button
        key={index}
        className={`carousel__indicator-button ${
          index === activeIndex ? "carousel__indicator-button--active" : ""
        }`}
        onClick={() => updateIndex(index)}
      >
        <FontAwesomeIcon icon={faCircleDot} />
      </button>
    ));

  const isDisabled = (change: number) =>
    activeIndex + change < 0 || activeIndex + change >= gyms.length;

  return (
    <section className="carousel">
      <div
        className="carousel__slide-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {gyms.map((item, index) => (
          <Slide key={index} item={item} />
        ))}
      </div>
      <div className="carousel__buttons">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          disabled={isDisabled(-1)}
        >
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className="carousel__buttons--big"
          />
        </button>

        <div className="carousel__indicators">{renderIndicators()}</div>

        <button
          onClick={() => updateIndex(activeIndex + 1)}
          disabled={isDisabled(1)}
        >
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="carousel__buttons--big"
          />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
