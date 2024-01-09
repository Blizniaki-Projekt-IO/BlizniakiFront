import React, { useState, useEffect } from "react";
import classes from "./Content.module.scss";
import questions from "./questions.json";
import axios from "axios";

function QuizContent(props) {
  const maxCount = 6;

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [character, setcharacter] = useState([]);
  const [questionsByCategory, setQuestionsByCategory] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

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

  const getResult = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/quiz/", {
        // face_id: parseInt(props.faceId),
        face_id: 1,
        character: character,
      });

      const result = response.data.result;
      const url = response.data.raport;

      console.log(response.data);

      props.onShowAnswers(props.image, result, url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (character.length === maxCount) {
      getResult();
    }
  }, [character]);

  const handleResponse = async (answer) => {
    setcharacter([...character, answer === 1 ? 1 : 0]);

    if (questionIndex < maxCount - 1) {
      setQuestionIndex(questionIndex + 1);
    }

    const nextCategoryIndex = currentCategoryIndex + 1;

    if (nextCategoryIndex < Object.keys(questionsByCategory).length) {
      setCurrentCategoryIndex(nextCategoryIndex);
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
          <h1>
            Pytanie {questionIndex + 1} <br /> {currentQuestion.CECHA}
          </h1>
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
