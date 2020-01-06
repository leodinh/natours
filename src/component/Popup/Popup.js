import React from "react";
import styles from "./Popup.module.scss";
import Nat8 from "../../assets/img/nat-8.jpg";
import Nat9 from "../../assets/img/nat-9.jpg";
function Popup() {
  return (
    <div className={styles.popup} id="popup">
      <div className={styles["popup__content"]}>
        <div className={styles["popup__left"]}>
          <img src={Nat8} alt="Tour" className={styles["popup__img"]} />
          <img src={Nat9} alt="Tour" className={styles["popup__img"]} />
        </div>
        <div className={styles["popup__right"]}>
          <a href="#tours" className={styles["popup__close"]}>
            &times;
          </a>
          <h2
            className={[
              styles["heading-secondary"],
              styles["u-margin-bottom-medium"]
            ].join(" ")}
          >
            Start booking now
          </h2>
          <h3
            className={[
              styles["heading-tertiary"],
              styles["u-margin-bottom-small"]
            ].join(" ")}
          >
            Import &ndash; Please read these terms before booking
          </h3>
          <p className={styles["popup__text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="#book"
            className={[styles["btn"], styles["btn--green"]].join(" ")}
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
