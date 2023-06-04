function Subscription() {
  return (
    <section className="subscribtion">
      <div className="container">
        <div className="subscribtion__box">
          <div className="subscibtion__box--title">
            <h1>READY TO START? GET YOUR FREE TRIAL</h1>
          </div>
          <div className="subscibtion__box--text">
            <p>
              By submitting this free training form, you agree to receive
              marketing information. You can withdraw your consent at any time
              by contacting{" "}
              <a href="mailto: hello@irongym.com">hello@irongym.com</a> and{" "}
              <a href="mailto: privacy@irongym.com">privacy@irongym.com</a>.
            </p>
          </div>
          <div className="subscibtion__box--inputs">
            <input
              className="subscibtion__box--inputs--input"
              placeholder="example@email.com"
            ></input>
            <button className="subscibtion__box--inputs--submit"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Subscription;
