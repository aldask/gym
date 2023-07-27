interface SliderElementProps {
  urlProp: string;
  imageProp: string;
  contentProp: string;
}

function SliderElement(props: SliderElementProps) {
  const { urlProp, imageProp, contentProp } = props;

  return (
    <div className="group-trainings__slider--element">
      <a href={urlProp}>
        <img src={imageProp} alt="training title" />
        <h2 className="group-trainings__slider--element--text">
          {contentProp}
        </h2>
      </a>
    </div>
  );
}

export default SliderElement;
