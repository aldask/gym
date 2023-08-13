import NewsContentBox from "./NewsContentBox";
import random from "../../Images/test.jpg";

function NewsContent() {
  return (
    <section className="news-content">
      <div className="container">
        <div className="news-content__box">
          <div className="news-content__box__title">
            <h1>IRON GYM NEWS</h1>
            <p>
              Iron Gym News is the knowledge hub for online Strength and
              Conditioning content. We have curated articles designed to empower
              you to Be Your Best inside and outside the weight room.
            </p>
          </div>
          <div className="news-content__box__content">
            <NewsContentBox
              imgSrc={random}
              area="NEWS"
              title="NATIONAL CLIENTS’ DAY"
              text="March 19th is declared Customer Day, so today we thank YOU for all the moments, friend!🍋 We are glad that you are part of our sports community and we wish you to continue to achieve results in Lemon Gym gyms💥"
              day="13 Aug 2023"
              time="1 min read"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsContent;
