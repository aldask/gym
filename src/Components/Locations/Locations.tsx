import pilaite from "../../Images/Locations/pilaite.jpg";

function Locations() {
  return (
    <section className="locations">
      <div className="container">
        <div className="locations__box">
          <div className="locations__box__side1">
            <h2 className="locations__box__side1__title">
              FIND NEAREST GYM THAT SUITS YOU BEST
            </h2>
            <p className="locations__box__side1__text">
              A variety locations in Lithuania. Gym clubs are situated in
              easy-to-find public places with 24/7 access.
            </p>
            <div className="locations__box__side1__buttons">
              <button className="locations__box__side1__buttons--explore">
                Explore
              </button>
              <button className="locations__box__side1__buttons--join">
                Join Us
              </button>
            </div>
          </div>
          <div className="locations__box__side2">
            <div className="locations__box__side2__gym-box">
              <div className="locations__box__side2__gym-box__img">
                <img src={pilaite} alt="gym" />
              </div>
              <div className="locations__box__side2__gym-box__content">
                <div className="locations__box__side2__gym-box__content--name">
                  <h1>Pilaite</h1>
                  <p>Pilaitė, Vyduno g. 2</p>
                </div>
                <div className="locations__box__side2__gym-box__content--perks">
                  gym perks here (icons and etc)
                </div>
                <div className="locations__box__side2__gym-box__content--about">
                  <button>Visi Club Page</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
