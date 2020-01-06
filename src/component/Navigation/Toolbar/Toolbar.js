import React from "react";
import styles from "./Toolbar.module.scss";
import Logo from "../../../assets/img/logo-white.png";
function Toolbar() {
  const btn = [styles.btn, styles["btn--white"], styles["btn--animated"]];
  return (
    <div className={styles.header}>
      <div className={styles["header__logo--box"]}>
        <img src={Logo} alt="Logo" className={styles["header__logo"]} />
      </div>
      <div className={styles["header__text--box"]}>
        <h1 className={styles.heading_primary}>
          <span className={styles["heading_primary--main"]}>Outdoors</span>
          <span className={styles["heading_primary--sub"]}>
            is where life happens
          </span>
        </h1>
        <a href="#discover" className={btn.join(" ")}>
          Discover our tours
        </a>
      </div>
    </div>
  );
}

export default Toolbar;
