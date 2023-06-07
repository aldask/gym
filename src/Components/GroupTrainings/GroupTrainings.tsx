import React, { useEffect } from "react";
import test from "../../Images/GroupTrainings/test.jpg";
import SliderElement from "../SliderElement";

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
    }
  }, []);

  return (
    <section className="group-trainings">
      <div className="group-trainings__slider">
        <SliderElement urlProp="test" imageProp={test} contentProp="testtttt" />
        <SliderElement urlProp="test" imageProp={test} contentProp="testtttt" />
        <SliderElement urlProp="test" imageProp={test} contentProp="testtttt" />
        <SliderElement urlProp="test" imageProp={test} contentProp="testtttt" />
        <SliderElement urlProp="test" imageProp={test} contentProp="testtttt" />
        <SliderElement urlProp="test" imageProp={test} contentProp="testtttt" />
      </div>
    </section>
  );
}

export default GroupTrainings;
