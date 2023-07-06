interface SliderProps {
  locationPic: string;
  gymName: string;
  gymStreet: string;
  gymPerks: string;
  active: boolean;
}

function Slider(props: SliderProps) {
  const { locationPic, gymName, gymStreet, gymPerks } = props;
  return (
    <div className="locations__box__side2__gym-box">
      <div className="locations__box__side2__gym-box__img">
        <img src={locationPic} alt="gym" />
      </div>
      <div className="locations__box__side2__gym-box__content">
        <div className="locations__box__side2__gym-box__content--name">
          <h1>{gymName}</h1>
          <p>{gymStreet}</p>
        </div>
        <div className="locations__box__side2__gym-box__content--perks">
          {gymPerks}
        </div>
        <div className="locations__box__side2__gym-box__content--about">
          <button>Visi Club Page</button>
        </div>
      </div>
    </div>
  );
}
export default Slider;
