import React, { useState } from "react";
import Slide from "./Slide";
import pilaite from "../Images/Locations/pilaite.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      locationPic: pilaite,
      gymName: "Pilaite",
      gymStreet: "axcvxsdfsdfsdfcvxcvs",
      gymPerks: "perks here",
    },
    {
      locationPic: pilaite,
      gymName: "Pilaite",
      gymStreet: "axcvxcsdfsdfsdfvxcvs",
      gymPerks: "perks here",
    },
    {
      locationPic: pilaite,
      gymName: "Pilaite",
      gymStreet: "axcvxcvsdfsfdxcvs",
      gymPerks: "perks here",
    },
    {
      locationPic: pilaite,
      gymName: "Pilaite",
      gymStreet: "axcvxcvsdfsfdxcvs",
      gymPerks: "perks here",
    },
  ];

  const updateIndex = (newIndex: number) => {
    newIndex = Math.max(0, Math.min(newIndex, carouselItems.length - 1));
    setActiveIndex(newIndex);
  };

  const renderIndicators = () => {
    return carouselItems.map((_, index) => (
      <button
        key={index}
        className={`carousel__indicator-button ${
          index === activeIndex ? "carousel__indicator-button--active" : ""
        }`}
        onClick={() => updateIndex(index)}
      >
        <FontAwesomeIcon
          icon={faCircle}
          className="material-symbols-outlined"
        />
      </button>
    ));
  };

  const isPreviousDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === carouselItems.length - 1;

  return (
    <div className="carousel">
      <div
        className="carousel__slide-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <Slide key={index} item={item} width="100%" />
        ))}
      </div>
      <div className="carousel__carousel-buttons">
        <button
          className="carousel__button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
          disabled={isPreviousDisabled}
        >
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className="material-symbols-outlined"
          />
        </button>

        <div className="carousel__indicators">{renderIndicators()}</div>

        <button
          className="carousel__button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
          disabled={isNextDisabled}
        >
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="material-symbols-outlined"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
