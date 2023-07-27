import Icon1 from "../../Images/Why-Us/icon1.svg";
import Icon2 from "../../Images/Why-Us/icon2.svg";
import Icon3 from "../../Images/Why-Us/icon3.svg";
import Icon4 from "../../Images/Why-Us/icon4.svg";
import Icon5 from "../../Images/Why-Us/icon5.svg";
import Icon6 from "../../Images/Why-Us/icon6.svg";
import GridElement from "./GridElement";

function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us__box">
          <div className="why-us__box--title">
            <h1>6 Reasons to choose our gym</h1>
          </div>
          <div className="why-us__box--content">
            <GridElement
              iconProp={Icon1}
              titleProp="Variety of locations"
              textProp="Choose from multiple convenient fitness center locations that suit your preferences."
            />
            <GridElement
              iconProp={Icon2}
              titleProp="24/7 open"
              textProp="Fitness on your schedule, anytime, anywhere."
            />
            <GridElement
              iconProp={Icon3}
              titleProp="Professional coaches"
              textProp="Our experienced and knowledgeable fitness trainers provide expert guidance and support to help you achieve your goals effectively."
            />
            <GridElement
              iconProp={Icon4}
              titleProp="Spacious workout zones"
              textProp="Enjoy ample space in our fitness areas, providing you with room to exercise comfortably and move freely during your workouts."
            />
            <GridElement
              iconProp={Icon5}
              titleProp="New Equipment"
              textProp="Experience top-of-the-line fitness equipment, meticulously maintained and regularly updated to ensure a modern and effective workout experience."
            />
            <GridElement
              iconProp={Icon6}
              titleProp="Friendly Environment"
              textProp="Our fitness centers foster a welcoming and inclusive atmosphere, where you'll feel comfortable and supported on your fitness journey."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
