import Staff from "../../Images/Career/staff.png";
import Staff1 from "../../Images/Career/staff1.jpg";
import Icon1 from "../../Images/Career/Icon1.png";
import Icon2 from "../../Images/Career/Icon2.png";
import Icon3 from "../../Images/Career/Icon3.png";
import GridElement from "../WhyUs/GridElement";

function CareerContent() {
  return (
    <section className="career">
      <div className="container">
        <div className="career-box">
          <div className="career-box__top">
            <div className="career-box__top--text">
              <h1>JOIN OUR TEAM!</h1>
              <p>
                If you, like us, love sport and want to contribute to the
                mission to make Lithuania healthier – write to us! We’re not
                just here to play sports, laugh and catch up on the world’s
                trends, but to help people love sport, improve their well-being
                and love themselves!
              </p>
            </div>
            <div className="career-box__top--img">
              <img src={Staff} alt="people-group" />
              <img src={Staff1} alt="people-group" />
            </div>
          </div>
          <div className="career-box__middle">
            <h1>OPEN POSITIONS</h1>
            <p>Sorry, we don't have any positions open yet!</p>
          </div>
          <div className="career-box__bottom">
            <h1>BENEFITS IN OUR TEAM</h1>
            <div className="career-box__bottom--content">
              <GridElement
                iconProp={Icon1}
                titleProp="TEAM"
                textProp="A professional team, support from the manager and the opportunity to improve your professional competences"
              />
              <GridElement
                iconProp={Icon2}
                titleProp="CULTURE"
                textProp="An energetic, friendly and supportive team, a culture based on trust, openness and teamwork"
              />
              <GridElement
                iconProp={Icon3}
                titleProp="VALUE"
                textProp="We offer the opportunity to exercise not only for you, but also for your loved ones. Of course, all kinds of activity promotion and a unique opportunity to contribute to the promotion of a healthier lifestyle in society"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerContent;
