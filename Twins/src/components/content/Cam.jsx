import Webcam from "react-webcam";
import classes from "./Content.module.scss";
import { useRef, useState } from "react";
import FileSaver from "file-saver";

function Cam(props) {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  // const [formData, setFormData] = useState(new FormData());

  const capture = async () => {
    if (!capturedImage) {
      const imageSrc = webcamRef.current.getScreenshot();

      const blob = await fetch(imageSrc).then((res) => res.blob());

      const file = new File([blob], "snapshot.png", { type: "image/png" });

      setCapturedImage(URL.createObjectURL(file));
    } else {
      props.onShowQuiz(capturedImage);
    }
  };

  const reload = () => {
    setCapturedImage(null);
  };

  const saveFile = (file) => {
    FileSaver.saveAs(file, "snapshot.png");
  };

  return (
    <div className={classes.webcamContainer}>
      {capturedImage ? (
        <div className={classes.camContent}>
          <img src={capturedImage} alt="Captured" />
        </div>
      ) : (
        <div className={classes.camContent}>
          <Webcam ref={webcamRef} className={classes.webcam} />
        </div>
      )}

      <div className={classes.webcamPanel}>
        <p
          onClick={() => {
            props.onShowDefault();
          }}
        >
          <svg
            viewBox="0 0 25 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-469.000000, -1041.000000)"
                fill="#e599f7"
              >
                <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"></path>
              </g>
            </g>
          </svg>
        </p>
        <p
          onClick={() => {
            capture();
          }}
        >
          {capturedImage ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                fill="#e599f7"
              />
            </svg>
          ) : (
            <i></i>
          )}
        </p>
        <p
          onClick={() => {
            reload();
          }}
        >
          {capturedImage && (
            <svg
              fill="#e599f7"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16q0-2.784 1.088-5.312t2.912-4.384 4.384-2.912 5.344-1.088q2.784 0 5.312 1.088t4.384 2.912 2.912 4.384 1.088 5.312h2.304q0.736 0 1.28 0.416t0.8 1.024 0.16 1.28-0.64 1.184l-4.576 4.576q-0.672 0.672-1.6 0.672t-1.632-0.672l-4.576-4.576q-0.512-0.512-0.608-1.184t0.128-1.28 0.8-1.024 1.312-0.416h2.272q0-2.464-1.216-4.576t-3.328-3.328-4.576-1.216-4.608 1.216-3.328 3.328-1.216 4.576 1.216 4.608 3.328 3.328 4.608 1.216q1.728 0 3.36-0.64l3.424 3.392q-3.136 1.824-6.784 1.824-2.816 0-5.344-1.088t-4.384-2.912-2.912-4.384-1.088-5.344z"></path>
            </svg>
          )}
        </p>
      </div>
    </div>
  );
}

export default Cam;
