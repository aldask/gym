interface GridElementProps {
  iconProp: string;
  titleProp: string;
  textProp: string;
}

function GridElement(props: GridElementProps) {
  const { iconProp, titleProp, textProp } = props;

  return (
    <div className="why-us__box--content--element">
      <div className="why-us__box--content--element--icon">
        <img src={iconProp} alt="icon" />
      </div>
      <div className="why-us__box--content--element--title">
        <h3>{titleProp}</h3>
      </div>
      <div className="why-us__box--content--element--text">
        <p>{textProp}</p>
      </div>
    </div>
  );
}

export default GridElement;
