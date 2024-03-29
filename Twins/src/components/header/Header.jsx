import { useEffect, useRef } from "react";
import classes from "./Header.module.scss";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        headerRef.current.classList.remove(classes["header-fill"]);
      } else {
        headerRef.current.classList.add(classes["header-fill"]);
      }
    });
  }, []);

  return (
    <header ref={headerRef} className={classes.header}>
      <div
        className={classes["header__logo"]}
        onClick={() => {
          location.reload();
        }}
      >
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,152Zm68.72656-8.041a16.26177,16.26177,0,0,1-6.72363,1.47657A15.60358,15.60358,0,0,1,216,141.7915V184a40.04552,40.04552,0,0,1-40,40H80a40.04552,40.04552,0,0,1-40-40V141.7915a15.60358,15.60358,0,0,1-10.00293,3.644,16.254,16.254,0,0,1-6.72363-1.47657,15.76942,15.76942,0,0,1-9.12012-17.521l16.418-87.56592A16.00071,16.00071,0,0,1,50.17871,26.29834L104.98535,40h46.0293l54.80664-13.70166a15.99961,15.99961,0,0,1,19.60644,12.57227L241.84668,126.438A15.76942,15.76942,0,0,1,232.72656,143.959ZM200,122.04,148.11133,56H107.88867L56,122.04V184a24.0275,24.0275,0,0,0,24,24h40V195.314l-13.65723-13.65722a8.00018,8.00018,0,0,1,11.31446-11.31348L128,180.68652l10.34277-10.34326a8.00018,8.00018,0,0,1,11.31446,11.31348L136,195.314V208h40a24.0275,24.0275,0,0,0,24-24Z" />
        </svg>
        <p>BLIŹNIAKI</p>
      </div>
      <div className={`${classes["header__content"]} ${classes.list}`}></div>
    </header>
  );
}

export default Header;
