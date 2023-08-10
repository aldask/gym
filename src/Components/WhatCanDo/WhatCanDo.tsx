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
            <h2 className="what-can-do__box__image--box">COME TOGETHER
WITH A FRIEND</h2>
            {/* <h2>box2</h2>
            <h2>box3</h2>
            <h2>box4</h2> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatCanDo;
