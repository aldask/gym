import React from "react";
import { Link } from "react-router-dom";

interface SlideProps {
  item: {
    locationPic: string;
    gymName: string;
    gymStreet: string;
    gymPerks: string;
  };
}

function Slide({ item }: SlideProps) {
  const { locationPic, gymName, gymStreet, gymPerks } = item;

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="slide">
      <div className="slide__img">
        <img className="slide__img--img" src={locationPic} alt={gymName} />
      </div>
      <div className="slide__content">
        <div className="slide__content--name">
          <h1>{gymName}</h1>
          <p>{gymStreet}</p>
        </div>
        <div className="slide__content--perks">
          <p>{gymPerks}</p>
        </div>
        <div className="slide__content--about">
          <Link to="/prices" onClick={handleLinkClick}>
            <button>View club prices</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slide;
