import { useState } from "react";

function TrialContent() {
  const [email, setEmail] = useState("");
  const [noEmail, setNoEmail] = useState(false);
  const [okEmail, setOkEmail] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleSub = () => {
    if (email === "") {
      setNoEmail(true);
      setOkEmail(false);
      setSubscriptionSuccess(false);
    } else if (!validEmail(email)) {
      setNoEmail(false);
      setOkEmail(true);
      setSubscriptionSuccess(false);
    } else {
      setNoEmail(false);
      setOkEmail(false);
      setSubscriptionSuccess(true);
    }
  };

  const validEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <section className="trial">
      <div className="container-hero">
        <div className="trial-box">
          <div className="trial-box__side1">
            <h1 className="trial-box__side1--title ">
              GET YOUR FIRST TRIAL TRAINING{" "}
              <span className="background-v1">FOR FREE</span>
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
                className="trial-box__side1--sub--input"
                placeholder="Enter Your Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="trial-box__side1--sub--submit"
                onClick={handleSub}
              >
                Book Free Training!
              </button>
            </div>
            <div className="trial-box__side1--msgs">
              {noEmail && (
                <p className="trial-box__side1--msgs--err">
                  Please provide your email address
                </p>
              )}
              {okEmail && (
                <p className="trial-box__side1--msgs--err">
                  Ensure the use of the correct form while providing your email
                  address
                </p>
              )}
              {subscriptionSuccess && (
                <p className="trial-box__side1--msgs--scss">
                  Subscription successful!
                </p>
              )}
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
