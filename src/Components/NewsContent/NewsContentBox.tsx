interface NewsContentBoxProps {
  imgSrc: string;
  area: string;
  title: string;
  text: string;
  day: string;
  time: string;
}

const NewsContentBox: React.FC<NewsContentBoxProps> = (props) => {
  const { imgSrc, area, title, text, day, time } = props;

  return (
    <div className="news-box">
      <div className="news-box__side1">
        <img src={imgSrc} alt="img" />
      </div>
      <div className="news-box__side2">
        <p className="news-box__side2--area">{area}</p>
        <h2 className="news-box__side2--title">{title}</h2>
        <p className="news-box__side2--text">{text}</p>
        <div className="news-box__side2--dates">
          <div className="news-box__side2--dates--day">
            <p>{day}</p>
          </div>
          <div className="news-box__side2--dates--time">
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContentBox;
