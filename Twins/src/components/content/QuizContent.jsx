import React, { useState } from "react";
import classes from "./Content.module.scss";
import questions from "./questions.json";

function QuizContent(props) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [questionsByCategory, setQuestionsByCategory] = useState({});

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (Object.keys(questionsByCategory).length === 0) {
    const categorizedQuestions = {};
    questions.forEach((question) => {
      const category = question.CECHA;
      if (!categorizedQuestions[category]) {
        categorizedQuestions[category] = [];
      }
      categorizedQuestions[category].push(question);
    });

    Object.keys(categorizedQuestions).forEach((category) => {
      categorizedQuestions[category] = shuffleArray(
        categorizedQuestions[category]
      );
    });

    setQuestionsByCategory(categorizedQuestions);
  }

  const handleResponse = (response) => {
    setUserResponses([...userResponses, response === 1 ? "1" : "0"]);

    const nextCategoryIndex = currentCategoryIndex + 1;

    if (nextCategoryIndex < Object.keys(questionsByCategory).length) {
      setCurrentCategoryIndex(nextCategoryIndex);
    } else {
      console.log("Quiz completed!", userResponses);

      props.onShowAnswers();
    }
  };

  const renderQuestion = () => {
    const category = Object.keys(questionsByCategory)[currentCategoryIndex];
    const categoryQuestions = questionsByCategory[category];

    if (!categoryQuestions || categoryQuestions.length === 0) {
      return;
    }

    const currentQuestion = categoryQuestions[categoryQuestions.length - 1];

    return (
      <div className={classes.elements}>
        <div>
          <h1>{currentQuestion.CECHA}</h1>
          <h2>{currentQuestion.PYTANIE}</h2>
        </div>
        <div className={classes.buttons}>
          <button onClick={() => handleResponse(1)}>
            {currentQuestion["ODPOWIEDŹ 1"]}
          </button>
          <button onClick={() => handleResponse(0)}>
            {currentQuestion["ODPOWIEDŹ 0"]}
          </button>
        </div>
      </div>
    );
  };

  return <div className={classes.quizContainer}>{renderQuestion()}</div>;
}

export default QuizContent;
