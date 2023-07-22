import React from "react";

interface SlideProps {
  item: {
    locationPic: string;
    gymName: string;
    gymStreet: string;
    gymPerks: string;
  };
  width: string;
}

function Slide({ item, width }: SlideProps) {
  const { locationPic, gymName, gymStreet, gymPerks } = item;

  return (
    <div className="slide" style={{ width }}>
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
          <button>Visit Club Page</button>
        </div>
      </div>
    </div>
  );
}

export default Slide;