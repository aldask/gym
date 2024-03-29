import React, { useState } from "react";
import { questions, trial } from "../../Data/faq";
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
            {questions.map((question) => (
              <div
                key={question.ask}
                className={`faq-box__question-box--question ${
                  selectedQuestion === question.ask ? "active" : ""
                }`}
              >
                <button onClick={handleQuestion} value={question.ask}>
                  {question.ask}
                </button>
                <p
                  className={`faq-box__question-box--answer ${
                    selectedQuestion === question.ask ? "active" : ""
                  }`}
                >
                  {question.answer}
                </p>
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
            <p>
              If you can’t find what you’re looking for, please{" "}
              <span>
                <a href="mailto: hello@irongym.com">contact us</a>
              </span>
              .
            </p>
          </div>
          <div className="faq-box__question-box">
            {trial.map((question) => (
              <div
                key={question.ask}
                className={`faq-box__question-box--question ${
                  selectedQuestion === question.ask ? "active" : ""
                }`}
              >
                <button onClick={handleQuestion} value={question.ask}>
                  <img src={Benefit} alt="" />
                  {question.ask}
                </button>
                <p
                  className={`faq-box__question-box--answer ${
                    selectedQuestion === question.ask ? "active" : ""
                  }`}
                >
                  {question.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
