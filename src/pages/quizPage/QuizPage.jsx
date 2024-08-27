import React, { useState, useEffect } from "react";
import styles from "./quizPage.module.css";
import questionsArr from "../../utils/quiz";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";

import optionBg from "./../../assets/quizPage/option-bg.png";
import activeOptionBg from "./../../assets/quizPage/active-option-bg.png";
import pointsBg from "./../../assets/points-bg.png";

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  console.log(currentQuestionIndex);

  const totalQuestions = 3;

  const currentQuestion = questionsArr[currentQuestionIndex];

  // handle option click
  const handleOptionClick = (index) => {
    setActiveOptionIndex(index);

    if (index === currentQuestion.correctAnswer) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }
  };

  // handle next btn
  const handleNextQuestion = () => {
    if (activeOptionIndex === currentQuestion.correctAnswer) {
      setQuizScore((prevScore) => prevScore + 3);
    }

    // Check if we've reached the last question
    if (currentQuestionIndex === totalQuestions) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setActiveOptionIndex(null);
    }
  };

  useEffect(() => {
    if (quizFinished) {
      navigate("/");
    }
  }, [quizFinished, navigate]);

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className={`flex-col-center ${styles.QuizPage}`}>
      <Header title={"quiz"} />

      <div className={`flex-col-center ${styles.gameWrapper}`}>
        {/* points */}
        <div className={`flex-row-center ${styles.pointsContainer}`}>
          <div className={`flex-row-center ${styles.pointsBg}`}>
            <img src={pointsBg} alt="points-bg" />
          </div>

          <p className={styles.pointsTxt}>{quizScore}</p>
        </div>

        {/* Question */}
        <div className={`flex-row-center ${styles.questionWrapper}`}>
          <div className={`flex-row-center ${styles.question}`}>
            <img src={currentQuestion.questionImage} alt="question" />
          </div>

          <p className={styles.questionNo}>{currentQuestionIndex}</p>
        </div>

        {/* Options Container */}
        <div className={`flex-row-center ${styles.optionsContainer}`}>
          {currentQuestion.options?.map((option, index) => (
            <div
              key={index}
              className={`flex-row-center ${styles.singleOption}`}
              onClick={() => handleOptionClick(index)}
            >
              {/* Option bg */}
              <div className={`flex-row-center ${styles.optionBg}`}>
                <img
                  src={activeOptionIndex === index ? activeOptionBg : optionBg}
                  alt="option-bg"
                />
              </div>

              {/* Option Text */}
              <p className={styles.optionTxt}>{option.text}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`btn ${activeOptionIndex === null && "btnDisabled"}`}
          onClick={handleNextQuestion}
          disabled={activeOptionIndex === null}
        >
          {currentQuestionIndex === totalQuestions ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
