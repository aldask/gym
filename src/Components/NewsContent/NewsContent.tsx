import NewsContentBox from "./NewsContentBox";
import Img0 from "../../Images/News/Img0.jpg";
import Img1 from "../../Images/News/Img1.jpg";

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
              imgSrc={Img0}
              area="NEWS"
              title="NATIONAL CLIENTS’ DAY"
              text="March 19th is declared Customer Day, so today we thank YOU for all the moments, friend!🍋 We are glad that you are part of our sports community and we wish you to continue to achieve results in IRON Gym gyms💥"
              day="13 Aug 2023"
              time="1 min read"
            />
            <NewsContentBox
              imgSrc={Img1}
              area="NEWS"
              title="BANGINIS IRON GYM BIRTHDAY MARATHON!"
              text="Have you got your best sports outfit ready? Because the most fun IRON Gym BANGINIS birthday party is here!🔥 We made sure that EVERYONE found activities for themselves, and of course, what’s a birthday without gifts and a cake!🎂 See you in the morning🍋"
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
