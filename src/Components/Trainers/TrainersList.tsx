import IG from "../../Images/Trainers/IG.png";
import Phone from "../../Images/Trainers/Phone.png";
import Mail from "../../Images/Trainers/Mail.png";

import { coaches } from "../../Data/coaches";

function TrainersList() {
  return (
    <section className="trainers">
      <div className="trainers-hero-img">
        <img
          src="https://www.lemongym.lt/wp-content/uploads/2023/02/1440x520_trainers_5-1.png"
          alt=""
        />
        <h1>MEET OUR COACHES</h1>
      </div>
      <div className="container">
        <div className="trainers-box">
          <div className="trainers-box__top">
            <h1>FOLLOW ALONG EXPERT INSTRUCTORS</h1>
            <p>
              In the sports clubs you will find a wide range of group training.
              From light physical activity for the elderly to intense functional
              training for advanced club visitors
            </p>
          </div>
          <div className="trainers-box__bottom">
            <h1>ALL COACHES</h1>
            <div className="trainers-box__bottom__trainers">
              {coaches.map((coach, index) => (
                <div
                  key={index}
                  className="trainers-box__bottom__trainers--trainer"
                >
                  <div className="trainers-box__bottom__trainers--trainer--img">
                    <img src={coach.pic} alt={coach.name} />
                  </div>
                  <div className="trainers-box__bottom__trainers--trainer--name">
                    <h2>{coach.name}</h2>
                  </div>
                  <div className="trainers-box__bottom__trainers--trainer--details">
                    <div className="trainers-box__bottom__trainers--trainer--details--info">
                      <h2>Description</h2>
                      <p>{coach.description.info}</p>
                    </div>
                    <div className="trainers-box__bottom__trainers--trainer--details--contacts">
                      <h2>Contacts</h2>
                      <div className="trainers-box__bottom__trainers--trainer--details--contacts--ig">
                        <img src={IG} alt="ig" />
                        <a
                          href={`https://instagram.com/${coach.description.contacts.ig}`}
                        >
                          {coach.description.contacts.ig}
                        </a>
                      </div>
                      <div className="trainers-box__bottom__trainers--trainer--details--contacts--phone">
                        <img src={Phone} alt="phone" />
                        <a href={`tel:${coach.description.contacts.phone}`}>
                          {coach.description.contacts.phone}
                        </a>
                      </div>
                      <div className="trainers-box__bottom__trainers--trainer--details--contacts--email">
                        <img src={Mail} alt="mail" />
                        <a href={`mailto:${coach.description.contacts.email}`}>
                          {coach.description.contacts.email}
                        </a>
                      </div>
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
export default TrainersList;
