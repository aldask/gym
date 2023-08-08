import React, { useState } from "react";

function Subscription() {
  const [email, setEmail] = useState("");
  const [noEmail, setNoEmail] = useState(false);
  const [okEmail, setOkEmail] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] =
    useState<boolean>(false);

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
          <div className="subscription__box--msgs">
            {noEmail && (
              <p className="subscription__box--msgs--err">
                Please provide your email address
              </p>
            )}
            {okEmail && (
              <p className="subscription__box--msgs--err">
                Ensure the use of the correct form while providing your email
                address
              </p>
            )}
            {subscriptionSuccess && (
              <p className="subscription__box--msgs--scss">
                Subscription successful!
              </p>
            )}
          </div>
          <div className="subscription__box--inputs">
            <input
              className="subscription__box--inputs--input"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="subscription__box--inputs--submit"
              onClick={handleSub}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
