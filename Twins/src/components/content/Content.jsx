import classes from "./Content.module.scss";
import Default from "./Default";
import Cam from "./Cam";
import { useState } from "react";
import Drop from "./Drop";

function Content() {
  const onShowDefault = () => {
    setContent(
      <Default
        onShowWebcam={onShowWebcam}
        onShowFilereader={onShowFilereader}
      />
    );
  };

  const onShowWebcam = () => {
    setContent(<Cam onShowDefault={onShowDefault} />);
  };

  const onShowFilereader = () => {
    setContent(<Drop onShowDefault={onShowDefault} />);
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
