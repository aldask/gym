import pic from "./Styles/1.jpg";
import { useState, useEffect } from "react";

function Hero() {
  const [circleCounter, setCircleCounter] = useState(3.6);

  useEffect(() => {
    const loadBar = document.querySelector(
      ".hero-box__side1--loadbar--circle"
    ) as HTMLElement;

    const interval = setInterval(() => {
      setCircleCounter((prevCounter) => prevCounter + 3.6);

      loadBar.style.background = `conic-gradient(
        rgb(102, 102, 102) ${circleCounter}deg,
        rgb(0, 0, 0) 0deg
      )`;

      console.log(circleCounter);

      if (circleCounter >= 360) {
        setCircleCounter(3.6);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [circleCounter]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-box">
          <div className="hero-box__side1">
            <h1 className="hero-box__side1--title">
              Teambuilding in a <span className="background">workout</span>
            </h1>
            <p className="hero-box__side1--text">
              Gather your team to a group workout!
            </p>
            <div className="hero-box__side1--loadbar">
              <div className="hero-box__side1--loadbar--circle">
                <div className="hero-box__side1--loadbar--circle--inner"></div>
              </div>
            </div>
          </div>
          <div className="hero-box__side2">
            <img src={pic} alt="img"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
