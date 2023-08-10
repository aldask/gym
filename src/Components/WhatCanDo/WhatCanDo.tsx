import What from "../../Images/Trial/What.jpg";

function WhatCanDo() {
  return (
    <section className="what-can-do">
      <div className="container">
        <div className="what-can-do__box">
          <div className="what-can-do__box__text">
            <h1 className="what-can-do__box__text--upper-title">
              WHAT YOU CAN DO ON YOUR
            </h1>
            <h1 className="what-can-do__box__text--lower-title">
              FREE TRIAL TRAINING
            </h1>
            <p>What you can do on your free trial</p>
          </div>
          <div className="what-can-do__box__image">
            <img src={What} alt="what-you-can-do"></img>
            <h2 className="what-can-do__box__image--box1">
              COME TOGETHER WITH A FRIEND
            </h2>
            <h2 className="what-can-do__box__image--box2">
              ATTEND ANY GROUP TRAINING
            </h2>
            <h2 className="what-can-do__box__image--box3">
              VISIT ANY CLUB 1 TIME
            </h2>
            <h2 className="what-can-do__box__image--box4">
              EXERCISE IN THE GYM
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatCanDo;
