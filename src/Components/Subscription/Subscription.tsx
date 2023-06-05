function Subscription() {
  return (
    <section className="subscription">
      <div className="container">
        <div className="subscription__box">
          <div className="subscription__box--title">
            <h1>READY TO START? GET YOUR FREE TRIAL</h1>
          </div>
          <div className="subscription__box--text">
            <p>
              By submitting this free training form, you agree to receive
              marketing information. You can withdraw your consent at any time
              by contacting{" "}
              <a href="mailto:hello@irongym.com">hello@irongym.com</a> and{" "}
              <a href="mailto:privacy@irongym.com">privacy@irongym.com</a>.
            </p>
          </div>
          <div className="subscription__box--inputs">
            <input
              className="subscription__box--inputs--input"
              placeholder="example@email.com"
            />
            <button className="subscription__box--inputs--submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
