import coach from "../../Images/Trainers/coach.jpg";

function TrainersList() {
  return (
    <section className="trainers">
      <div className="trainers-hero-img">
        <img
          src="https://www.lemongym.lt/wp-content/uploads/2023/02/1440x520_trainers_5-1.png"
          alt=""
        />
        <h1>MEET OUR COACHES</h1>
      </div>
      <div className="container">
        <div className="trainers-box">
          <div className="trainers-box__top">
            <h1>FOLLOW ALONG EXPERT INSTRUCTORS</h1>
            <p>
              In the sports clubs you will find a wide range of group training.
              From light physical activity for the elderly to intense functional
              training for advanced club visitors
            </p>
          </div>
          <div className="trainers-box__bottom">
            <h1>ALL TRAINERS</h1>
            <div className="trainers-box__bottom__trainers">
              <div className="trainers-box__bottom__trainers--trainer">
                <div className="trainers-box__bottom__trainers--trainer--img">
                  <img src={coach} alt="coach" />
                </div>
                <div className="trainers-box__bottom__trainers--trainer--name">
                  <h2>Eddie Murphy</h2>
                </div>
                <div className="trainers-box__bottom__trainers--trainer--details">
                  coach details here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrainersList;
