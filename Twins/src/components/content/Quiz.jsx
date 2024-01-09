import classes from "./Content.module.scss";
import axios from "axios";

function Quiz(props) {
  const getResult = async () => {
    const formData = new FormData();
    formData.append("image", props.file);

    props.onShowQuizContent(props.image);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);

      const faceId = response.data.face_id;

      props.onShowAnswers();
      props.onShowQuizContent(props.image, faceId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes["col-stat"]}>
        <h1>Super. Mamy to!</h1>
        <h2>
          Wypełnij teraz krótki quiz aby dowiedzieć się jakie zwierze drzemie w
          twojej duszy.
        </h2>
      </div>

      <div
        className={classes.col}
        onClick={() => {
          getResult();
        }}
      >
        <svg
          fill="#ae3ec9"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="13.9999" y="23" width="8" height="2" />
          <rect x="9.9999" y="23" width="2" height="2" />
          <rect x="13.9999" y="18" width="8" height="2" />
          <rect x="9.9999" y="18" width="2" height="2" />
          <rect x="13.9999" y="13" width="8" height="2" />
          <rect x="9.9999" y="13" width="2" height="2" />
          <path
            d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"
            transform="translate(0 0)"
          />
          <rect width="32" height="32" style={{ fill: "none" }} />
        </svg>
        <div className={classes.sub}>Wypełnij Quiz</div>
      </div>
    </>
  );
}

export default Quiz;
