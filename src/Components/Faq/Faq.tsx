import React, { useState } from "react";
import { faqContent } from "../../Data/faq";

function Faq() {
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
          <div className="faq-box__question-box">
            {faqContent.map((question) => (
              <div key={question.ask} className="faq-box__question-box--question">
                <button
                  onClick={handleQuestion}
                  value={question.ask}
                >
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

export default Faq;
