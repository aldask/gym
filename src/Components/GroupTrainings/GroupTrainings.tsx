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

      //const transformedCount = elementCount / 2;
    }
  }, []);

  return (
    <section className="group-trainings">
      <div className="group-trainings__slider">
        <SliderElement
          urlProp="/trainings"
          imageProp={ButtLift}
          contentProp="Brazil Butt lift"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={FullBody}
          contentProp="Full body tone"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Nirvana}
          contentProp="Nirvana fitness"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={RockNcore}
          contentProp="Rock and core"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={SlowStrong}
          contentProp="Slow & strong"
        />
        <SliderElement urlProp="/trainings" imageProp={TRX} contentProp="TRX" />
        <SliderElement
          urlProp="/trainings"
          imageProp={TRXyoga}
          contentProp="TRX yoga"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Circle}
          contentProp="Circle Training"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Pilates}
          contentProp="Pilates"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Yoga}
          contentProp="Yoga"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={StretchBalance}
          contentProp="Stretch & Balance"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Grip}
          contentProp="Grip"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={PressNback}
          contentProp="Press & Back"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={HIIT}
          contentProp="HIIT"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Zumba}
          contentProp="Zumba"
        />
        {/* Doubled because smooth transition */}
        <SliderElement
          urlProp="/trainings"
          imageProp={ButtLift}
          contentProp="Brazil Butt lift"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={FullBody}
          contentProp="Full body tone"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Nirvana}
          contentProp="Nirvana fitness"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={RockNcore}
          contentProp="Rock and core"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={SlowStrong}
          contentProp="Slow & strong"
        />
        <SliderElement urlProp="/trainings" imageProp={TRX} contentProp="TRX" />
        <SliderElement
          urlProp="/trainings"
          imageProp={TRXyoga}
          contentProp="TRX yoga"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Circle}
          contentProp="Circle Training"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Pilates}
          contentProp="Pilates"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Yoga}
          contentProp="Yoga"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={StretchBalance}
          contentProp="Stretch & Balance"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Grip}
          contentProp="Grip"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={PressNback}
          contentProp="Press & Back"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={HIIT}
          contentProp="HIIT"
        />
        <SliderElement
          urlProp="/trainings"
          imageProp={Zumba}
          contentProp="Zumba"
        />
      </div>
    </section>
  );
}

export default GroupTrainings;
