import coach from "../../Images/Trainers/coach.jpg";
import IG from "../../Images/Trainers/IG.png";
import Phone from "../../Images/Trainers/Phone.png";
import Mail from "../../Images/Trainers/Mail.png";

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
            <h1>ALL TRAINERS</h1>
            <div className="trainers-box__bottom__trainers">
              <div className="trainers-box__bottom__trainers--trainer">
                <div className="trainers-box__bottom__trainers--trainer--img">
                  <img src={coach} alt="coach" />
                </div>
                <div className="trainers-box__bottom__trainers--trainer--name">
                  <h2>Eddie Murphy</h2>
                </div>
                <div className="trainers-box__bottom__trainers--trainer--details">
                  <div className="trainers-box__bottom__trainers--trainer--details--info">
                    <h2>Description</h2>
                    <p>
                      coach is good dudecoach is good dudecoach is good
                      dudecoach is good dude
                    </p>
                  </div>
                  <div className="trainers-box__bottom__trainers--trainer--details--contacts">
                    <h2>Contacts</h2>
                    <div className="trainers-box__bottom__trainers--trainer--details--contacts--ig">
                      <img src={IG} alt="ig" />
                      <a href="instagram.com/username">eddie.murphy</a>
                    </div>
                    <div className="trainers-box__bottom__trainers--trainer--details--contacts--phone">
                      <img src={Phone} alt="phone" />
                      <a href="tel:+3706112233">+3706112233</a>
                    </div>
                    <div className="trainers-box__bottom__trainers--trainer--details--contacts--email">
                      <img src={Mail} alt="mail" />
                      <a href="mailto:azuolas@gmail.com">azuolas@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrainersList;
