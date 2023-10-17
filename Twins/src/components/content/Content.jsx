import classes from "./Content.module.scss";
import Default from "./Default";
import Cam from "./Cam";
import { useState } from "react";

function Content() {
  const onDisableWebcam = () => {
    console.log("aaa");
    setContent(<Default onEnableWebcam={onEnableWebcam} />);
  };

  const onEnableWebcam = () => {
    setContent(<Cam onDisableWebcam={onDisableWebcam} />);
  };

  const [content, setContent] = useState(
    <Default onEnableWebcam={onEnableWebcam} />
  );

  return (
    <div className={classes.content}>
      <div className={classes["content__inner"]}>{content}</div>
    </div>
  );
}

export default Content;
