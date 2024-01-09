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

  const onShowQuiz = (image, file) => {
    setContent(
      <Quiz
        image={image}
        file={file}
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

  const onShowQuizContent = (image, faceId) => {
    setContent(
      <QuizContent
        onShowAnswers={onShowAnswers}
        image={image}
        faceId={faceId}
      />
    );
  };

  const onShowAnswers = (image, result, url) => {
    setContent(<Answers image={image} result={result} url={url} />);
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
