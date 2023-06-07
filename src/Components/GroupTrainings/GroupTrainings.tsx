import React, { useEffect } from "react";
import test from "../../Images/GroupTrainings/test.jpg";

function GroupTrainings() {
  useEffect(() => {
    const elementCount = document.querySelectorAll(
      ".group-trainings__slider--element"
    ).length;
    const element = document.querySelector(
      ".group-trainings__slider"
    ) as HTMLElement;

    if (element) {
      element.style.width = `calc(400px * ${elementCount})`;

      const transformedCount = elementCount / 2;
      const keyframesValue = `translateX(calc(-400px * ${transformedCount}))`;
      element.style.transform = keyframesValue;

      console.log(elementCount);
      console.log(keyframesValue);
    }
  }, []);

  return (
    <div className="group-trainings">
      <div className="group-trainings__slider">
        <div className="group-trainings__slider--element">
          <a href="#">
            <img src={test} alt="training title" />
            <h2 className="group-trainings__slider--element--text">
              Group trainings
            </h2>
          </a>
        </div>
        <div className="group-trainings__slider--element">
          <a href="#">
            <img src={test} alt="training title" />
            <h2 className="group-trainings__slider--element--text">
              Group trainings
            </h2>
          </a>
        </div>
        <div className="group-trainings__slider--element">
          <a href="#">
            <img src={test} alt="training title" />
            <h2 className="group-trainings__slider--element--text">
              Group trainings
            </h2>
          </a>
        </div>
        <div className="group-trainings__slider--element">
          <a href="#">
            <img src={test} alt="training title" />
            <h2 className="group-trainings__slider--element--text">
              Group trainings
            </h2>
          </a>
        </div>
        <div className="group-trainings__slider--element">
          <a href="#">
            <img src={test} alt="training title" />
            <h2 className="group-trainings__slider--element--text">
              Group trainings
            </h2>
          </a>
        </div>
        <div className="group-trainings__slider--element">
          <a href="#">
            <img src={test} alt="training title" />
            <h2 className="group-trainings__slider--element--text">
              Group trainings
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GroupTrainings;
