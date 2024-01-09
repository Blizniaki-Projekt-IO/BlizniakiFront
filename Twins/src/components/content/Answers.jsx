import classes from "./Content.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Answers(props) {
  const imageMapping = {
    kot: "cat.jpg",
    pies: "dog.jpg",
    lis: "fox.jpg",
    surykatka: "meerkat.jpg",
    niedzwiedz: "bear.jpg",
  };

  const [animate, setAnimate] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});

  const resultEntries = Object.entries(props.result);
  const [highestLabel, highestValue] = resultEntries.reduce(
    (max, entry) => (entry[1] > max[1] ? entry : max),
    resultEntries[0]
  );

  const highestImage = imageMapping[highestLabel] || props.image;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
      setAnimatedValues(props.result);
    }, 100);

    return () => clearTimeout(timeout);
  }, [props.result]);

  const createColumn = (label, value) => {
    const animatedValue = animatedValues[label] || 0;

    const columnStyle = {
      height: animate ? `${animatedValue}%` : "0%",
      backgroundColor: `rgba(138, 43, 226, ${animatedValue / 100})`,
    };

    return (
      <div key={label} className={classes.column}>
        <div className={classes.ind} style={columnStyle} />
        <p>
          {label}: <br /> {animatedValue}%
        </p>
      </div>
    );
  };

  return (
    <div className={classes.resultsContainer}>
      <h2>Twój wynik to:</h2>
      <div className={classes.columns}>
        {Object.entries(props.result).map(([label, value]) =>
          createColumn(label, value)
        )}
      </div>
      <div className={classes.download}>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${highestImage})` }}
        ></div>
        <a
          href={`http://localhost:8000/api/report?report_url=${props.url.raport_pdf}`}
          target="_blank"
        >
          <button>Pobierz PDF</button>
        </a>
        <a
          href={`http://localhost:8000/api/report-html?report_url=${props.url.raport_html}`}
          target="_blank"
        >
          <button>Pobierz HTML</button>
        </a>
      </div>
    </div>
  );
}

export default Answers;
