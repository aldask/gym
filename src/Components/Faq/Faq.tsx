import React, { useState } from "react";
import { faqContent } from "../../Data/faq";
import { trial } from "../../Data/trial";
import Benefit from "../../Images/Misc/benefit_logo.png";

export function FaqForPrice() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedQuestion = e.currentTarget.value;
    setSelectedQuestion((prevSelectedQuestion) =>
      prevSelectedQuestion === clickedQuestion ? "" : clickedQuestion
    );
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-box">
          <div className="faq-box__header">
            <h1>WE’VE GOT ANSWERS</h1>
            <p>
              If you can’t find what you’re looking for, please{" "}
              <span>
                <a href="mailto: hello@irongym.com">contact us</a>
              </span>
              .
            </p>
          </div>
          <div className="faq-box__question-box">
            {faqContent.map((question) => (
              <div
                key={question.ask}
                className="faq-box__question-box--question"
              >
                <button onClick={handleQuestion} value={question.ask}>
                  {question.ask}
                </button>
                {selectedQuestion === question.ask && (
                  <p className="faq-box__question-box--answer">
                    {question.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqForTrial() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedQuestion = e.currentTarget.value;
    setSelectedQuestion((prevSelectedQuestion) =>
      prevSelectedQuestion === clickedQuestion ? "" : clickedQuestion
    );
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-box">
          <div className="faq-box__header">
            <h1>HOW TO REGISTER?</h1>
          </div>
          <div className="faq-box__question-box">
            {trial.map((question) => (
              <div
                key={question.ask}
                className="faq-box__question-box--question"
              >
                <button onClick={handleQuestion} value={question.ask}>
                  <img src={Benefit} alt="" />
                  {question.ask}
                </button>
                {selectedQuestion === question.ask && (
                  <p className="faq-box__question-box--answer">
                    {question.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
