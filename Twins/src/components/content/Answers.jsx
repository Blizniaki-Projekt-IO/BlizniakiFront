import classes from "./Content.module.scss";

function Answers(props) {
  const result = {
    pies: 20,
    kot: 10,
    lis: 0,
    niedźwiedź: 70,
    surykatka: 0,
  };

  const createColumn = (label, value) => {
    const columnStyle = {
      height: `${value}%`,
      backgroundColor: `rgba(138, 43, 226, ${value / 100})`,
    };

    return (
      <div key={label} className={classes.column} style={columnStyle}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
    );
  };

  return (
    <div className={classes.resultsContainer}>
      <h2>Wynik</h2>
      {Object.entries(result).map(([label, value]) =>
        createColumn(label, value)
      )}
      <div className={classes.download}>
        <img src={props.image} alt="face" />
        <button>Pobierz Raport</button>
      </div>
    </div>
  );
}

export default Answers;
