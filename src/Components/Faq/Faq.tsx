import React, { useState } from "react";
import { faqContent } from "../../Data/faq";

function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedQuestion = faqContent.find(
      (question) => question.ask === e.currentTarget.value
    );

    if (selectedQuestion) {
      setSelectedQuestion(selectedQuestion.answer);
    } else {
      setSelectedQuestion("");
    }
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-box">
          <div className="faq-box__question-box">
            {faqContent.map((question) => (
              <div key={question.ask}>
                <button
                  className="faq-box__question-box--question"
                  onClick={handleQuestion}
                >
                  {question.ask}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
