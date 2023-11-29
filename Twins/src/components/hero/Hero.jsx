import classes from "./Hero.module.scss";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero__intro"]}>
        <h1>TWINS</h1>
        <h2>Animal-Face AI Test</h2>
        <h3>
          Unleash your inner animal! Our AI will reveal your animal
          doppelgänger. Let the fun begin!
        </h3>
        <a href="#content">
          <div className={classes.arrow}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L6 13M12 19L18 13"
                stroke="#da77f2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
