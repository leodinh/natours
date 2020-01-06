import React, { useState } from "react";
import styles from "./Navigation.module.scss";
function Navigation() {
  const navigationsList = useState([
    "About Natours",
    "Your benefits",
    "Popular tours",
    "Stories",
    "Book now"
  ])[0];
  return (
    <div className={styles["navigation"]}>
      <input
        type="checkbox"
        className={styles["navigation__checkbox"]}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className={styles["navigation__button"]}>
        <span className={styles["navigation__icon"]}>&nbsp;</span>
      </label>

      <div className={styles["navigation__background"]}>&nbsp;</div>

      <nav className={styles["navigation__nav"]}>
        <ul className={styles["navigation__list"]}>
          {navigationsList.map(nav => (
            <li className={styles["navigation__item"]} key={nav}>
              <a href="#navigation" className={styles["navigation__link"]}>
                {nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
