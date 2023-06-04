import test from "../../Images/Why-Us/test.png";
import GridElement from "../GridElement";

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
              iconProp={test}
              titleProp="Variety of locations"
              textProp="Lorem ipsum dolor sit amet"
            />
            <GridElement
              iconProp={test}
              titleProp="24/7 open"
              textProp="Lorem ipsum dolor sit amet"
            />
            <GridElement
              iconProp={test}
              titleProp="Professional coaches"
              textProp="Lorem ipsum dolor sit amet"
            />
            <GridElement
              iconProp={test}
              titleProp="Spacious workout zones"
              textProp="Lorem ipsum dolor sit amet"
            />
            <GridElement
              iconProp={test}
              titleProp="Lorem5"
              textProp="Lorem ipsum dolor sit amet"
            />
            <GridElement
              iconProp={test}
              titleProp="lorems5s"
              textProp="Lorem ipsum dolor sit amet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
