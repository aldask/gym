import React, { useState } from "react";
import Slide from "./Slide";
import { slides } from "../../Data/locationsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    newIndex = Math.max(0, Math.min(newIndex, slides.length - 1));
    setActiveIndex(newIndex);
  };

  const renderIndicators = () => {
    return slides.map((_, index) => (
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
  };

  const isPreviousDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === slides.length - 1;

  return (
    <section className="carousel">
      <div
        className="carousel__slide-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((item, index) => (
          <Slide key={index} item={item} width="100%" />
        ))}
      </div>
      <div className="carousel__buttons">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          disabled={isPreviousDisabled}
        >
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className="carousel__buttons--big"
          />
        </button>

        <div className="carousel__indicators">{renderIndicators()}</div>

        <button
          onClick={() => updateIndex(activeIndex + 1)}
          disabled={isNextDisabled}
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
