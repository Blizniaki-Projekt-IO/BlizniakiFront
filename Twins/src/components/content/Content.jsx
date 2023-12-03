import classes from "./Content.module.scss";
import Default from "./Default";
import Cam from "./Cam";
import { useState } from "react";
import Drop from "./Drop";
import Quiz from "./Quiz";
import QuizContent from "./QuizContent";
import Answers from "./Answers";

function Content() {
  const onShowDefault = () => {
    setContent(
      <Default
        onShowWebcam={onShowWebcam}
        onShowFilereader={onShowFilereader}
      />
    );
  };

  const onShowQuiz = (image) => {
    setContent(
      <Quiz
        image={image}
        onShowQuizContent={onShowQuizContent}
        onShowAnswers={onShowAnswers}
      />
    );
  };

  const onShowWebcam = () => {
    setContent(<Cam onShowDefault={onShowDefault} onShowQuiz={onShowQuiz} />);
  };

  const onShowFilereader = () => {
    setContent(<Drop onShowDefault={onShowDefault} onShowQuiz={onShowQuiz} />);
  };

  const onShowQuizContent = () => {
    setContent(<QuizContent onShowAnswers={onShowAnswers} />);
  };

  const onShowAnswers = () => {
    setContent(<Answers />);
  };

  const [content, setContent] = useState(
    <Default onShowWebcam={onShowWebcam} onShowFilereader={onShowFilereader} />
  );

  return (
    <div className={classes.content}>
      <div id="content" className={classes.indicator}></div>
      <div className={classes["content__inner"]}>{content}</div>
    </div>
  );
}

export default Content;
