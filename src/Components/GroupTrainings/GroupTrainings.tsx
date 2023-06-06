import test from "../../Images/GroupTrainings/test.jpg";

function GroupTrainings() {
  return (
    <section className="group-trainings">
      <div className="group-trainings__box">
        <div className="group-trainings__box--slider">
          <div className="slider-element">
            <div className="image-container">
              <img src={test} alt="img" />
              <div className="text-overlay">
                <a href="#">Group trainings</a>
              </div>
            </div>
          </div>
          <div className="slider-element">
            <div className="image-container">
              <img src={test} alt="img" />
              <div className="text-overlay">
                <a href="#">Group trainings</a>
              </div>
            </div>
          </div>
          <div className="slider-element">
            <div className="image-container">
              <img src={test} alt="img" />
              <div className="text-overlay">
                <a href="#">Group trainings</a>
              </div>
            </div>
          </div>
          <div className="slider-element">
            <div className="image-container">
              <img src={test} alt="img" />
              <div className="text-overlay">
                <a href="#">Group trainings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupTrainings;
