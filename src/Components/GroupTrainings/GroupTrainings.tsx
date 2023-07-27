import React, { useEffect } from "react";
import SliderElement from "./SliderElement";

//Pics
import ButtLift from "../../Images/GroupTrainings/Butt-Lift.jpg";
import FullBody from "../../Images/GroupTrainings/Full-Body-Tone.jpg";
import Nirvana from "../../Images/GroupTrainings/Nirvana.jpg";
import RockNcore from "../../Images/GroupTrainings/Rock-n-Core.jpg";
import SlowStrong from "../../Images/GroupTrainings/Slow-Strong.jpg";
import TRXyoga from "../../Images/GroupTrainings/TRX.jpg";
import TRX from "../../Images/GroupTrainings/TRX-Yoga.jpg";
import Circle from "../../Images/GroupTrainings/Circle.jpg";
import Pilates from "../../Images/GroupTrainings/Pilates.jpg";
import Yoga from "../../Images/GroupTrainings/Yoga.jpg";
import StretchBalance from "../../Images/GroupTrainings/StrechBalance.jpg";
import Grip from "../../Images/GroupTrainings/Grip.jpg";
import PressNback from "../../Images/GroupTrainings/PressNback.jpg";
import HIIT from "../../Images/GroupTrainings/HIIT.jpg";
import Zumba from "../../Images/GroupTrainings/Zumba.jpg";

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
    }
  }, []);

  return (
    <section className="group-trainings">
      <div className="group-trainings__slider">
        <SliderElement
          urlProp="url"
          imageProp={ButtLift}
          contentProp="Brazil Butt lift"
        />
        <SliderElement
          urlProp="url"
          imageProp={FullBody}
          contentProp="Full body tone"
        />
        <SliderElement
          urlProp="url"
          imageProp={Nirvana}
          contentProp="Nirvana fitness"
        />
        <SliderElement
          urlProp="url"
          imageProp={RockNcore}
          contentProp="Rock and core"
        />
        <SliderElement
          urlProp="url"
          imageProp={SlowStrong}
          contentProp="Slow & strong"
        />
        <SliderElement urlProp="url" imageProp={TRX} contentProp="TRX" />
        <SliderElement
          urlProp="url"
          imageProp={TRXyoga}
          contentProp="TRX yoga"
        />
        <SliderElement
          urlProp="url"
          imageProp={Circle}
          contentProp="Circle Training"
        />
        <SliderElement
          urlProp="url"
          imageProp={Pilates}
          contentProp="Pilates"
        />
        <SliderElement urlProp="url" imageProp={Yoga} contentProp="Yoga" />
        <SliderElement
          urlProp="url"
          imageProp={StretchBalance}
          contentProp="Stretch & Balance"
        />
        <SliderElement urlProp="url" imageProp={Grip} contentProp="Grip" />
        <SliderElement
          urlProp="url"
          imageProp={PressNback}
          contentProp="Press & Back"
        />
        <SliderElement urlProp="url" imageProp={HIIT} contentProp="HIIT" />
        <SliderElement urlProp="url" imageProp={Zumba} contentProp="Zumba" />
      </div>
    </section>
  );
}

export default GroupTrainings;
