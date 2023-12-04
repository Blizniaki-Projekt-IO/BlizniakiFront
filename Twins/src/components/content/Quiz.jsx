import classes from "./Content.module.scss";
import axios from "axios";

function Quiz(props) {
  const getResult = async () => {
    // const formData = new FormData();
    // formData.append("image", props.image);

    props.onShowQuizContent(props.image);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8000/api/upload/",
    //     formData
    //   );

    //   console.log(response);

    //   // props.onShowAnswers();
    //   props.onShowQuizContent(props.image);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <div
        className={classes.col}
        onClick={() => {
          getResult();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
            stroke="#ae3ec9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="1" fill="#ae3ec9" />
          <path
            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
            stroke="#ae3ec9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className={classes.sub}>Wypełnij Quiz</div>
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
        <div className={classes.sub}>Sprawdź Wynik</div>
      </div>
    </>
  );
}

export default Quiz;
