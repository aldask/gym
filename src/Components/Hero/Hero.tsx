import { useState, useEffect } from "react";
import { heroContent } from "../../Data/heroData";

function Hero() {
  const initialContent = heroContent[0];

  const [circleCounter, setCircleCounter] = useState(3.6);
  const [contentId, setContentId] = useState(initialContent.id);
  const [contentTitle, setContentTitle] = useState(initialContent.title);
  const [contentText, setContentText] = useState(initialContent.text);
  const [contentImage, setContentImage] = useState(initialContent.picture);
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

  //Content setting
  useEffect(() => {
    const { title, text, picture } = heroContent[contentId];
    setContentTitle(title);
    setContentText(text);
    setContentImage(picture);
  }, [contentId]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-box" key={key}>
          <div className="hero-box__side1">
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
