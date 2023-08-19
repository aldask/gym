import React from "react";
import { gyms } from "../../Data/gymsData";
import GymBG from "../../Images/Backgrounds/Gyms.jpg";

function AllGyms() {
  return (
    <section className="all-gyms">
      <div className="all-gyms-hero-img">
        <img src={GymBG} alt="gym-background" />
        <h1>EXPLORE OUR GYMS</h1>
      </div>
      <div className="container">
        <div className="all-gyms-box">
          <div className="all-gyms-box__top">
            <h1>FIND A GYM THAT SUITS YOU BEST</h1>
            <p>
              A variety of locations in Lithuania. Iron Gym clubs are situated
              in easy-to-find public places with 24/7 access.
            </p>
          </div>
          <div className="all-gyms-box__bottom">
            <h1>OUR GYMS</h1>
            <div className="all-gyms-box__bottom__gyms">
              {gyms.map((gym, index) => (
                <div key={index} className="all-gyms-box__bottom__gyms--gym">
                  <div className="all-gyms-box__bottom__gyms--gym--main">
                    <div className="all-gyms-box__bottom__gyms--gym--main--img">
                      <img src={gym.locationPic} alt={gym.gymName} />
                    </div>
                    <div className="all-gyms-box__bottom__gyms--gym--main--name">
                      <h2>{gym.gymName}</h2>
                      <p>{gym.gymStreet}</p>
                    </div>
                  </div>
                  <div className="all-gyms-box__bottom__gyms--gym--details">
                    <div className="all-gyms-box__bottom__gyms--gym--details--info">
                      <h2>Description</h2>
                      <p>{gym.description}</p>
                    </div>
                    <div className="all-gyms-box__bottom__gyms--gym--details--benefits">
                      <h2>Benefits</h2>
                      <p>{gym.gymPerks}</p>
                    </div>
                    <div className="all-gyms-box__bottom__gyms--gym--details--prices">
                      <h2>
                        Plan prices starting from:{" "}
                        <span>€{gym.plans[0].Price}</span>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllGyms;
