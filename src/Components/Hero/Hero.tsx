import { useState, useEffect } from "react";
import { heroContent } from "../../Data/heroData";

function Hero() {
  const [circleCounter, setCircleCounter] = useState(3.6);
  const [contentId, setContentId] = useState(heroContent[0].id);
  const [contentTitle, setContentTitle] = useState(heroContent[0].title);
  const [contentText, setContentText] = useState(heroContent[0].text);
  const [contentImage, setContentImage] = useState(heroContent[0].picture);
  const [key, setKey] = useState(0);

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

      if (circleCounter >= 360) {
        setCircleCounter(3.6);
        setContentId((prevId) => (prevId + 1) % heroContent.length);
        setKey((prevKey) => prevKey + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [circleCounter]);


//
  useEffect(() => {
    setContentTitle(heroContent[contentId].title);
    setContentText(heroContent[contentId].text);
    setContentImage(heroContent[contentId].picture);
  }, [contentId]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-box">
          <div className="hero-box__side1" key={key}>
            <h1 className="hero-box__side1--title">
              {contentTitle} <span className="background">workout</span>
            </h1>
            <p className="hero-box__side1--text">{contentText}</p>
            <div className="hero-box__side1--loadbar">
              <div className="hero-box__side1--loadbar--circle">
                <div className="hero-box__side1--loadbar--circle--inner"></div>
              </div>
            </div>
          </div>
          <div className="hero-box__side2">
            <img src={contentImage} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;