import pic from "../../Images/Trial/Trial1.jpg";

function TrialContent() {
  return (
    <section className="trial">
      <div className="container-hero">
        <div className="trial-box">
          <div className="trial-box__side1">
            <h1 className="trial-box__side1--title ">
              GET YOUR FIRST TRIAL TRAINING
              <span className="background">FOR FREE</span>
            </h1>
            <p className="trial-box__side1--text">
              By submitting this free training form, you agree to receive
              marketing information. You can withdraw your consent at any time
              by contacting{" "}
              <a href="mailto:hello@irongym.com">hello@irongym.com</a> and{" "}
              <a href="mailto:private@irongym.com">private@irongym.com</a>.
            </p>
            <div className="trial-box__side1--sub">
              <input
                className="subscription__box--inputs--input"
                placeholder="Enter Your Email"
                type="email"
              />
              <button className="subscription__box--inputs--submit">
                Book Free Training!
              </button>
            </div>
          </div>
          <div className="trial-box__side2">
            <span className="trial-box__side2--image"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrialContent;
