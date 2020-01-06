import React from "react";
import styles from "./Tour.module.scss";
function Tour(props) {
  return (
    <div className={styles.card}>
      <div
        className={[styles["card__side"], styles["card__side--front"]].join(
          " "
        )}
      >
        <div
          className={[
            styles["card__picture"],
            styles[`card__picture--${props.id}`]
          ].join(" ")}
        >
          &nbsp;
        </div>
        <h4 className={styles["card__heading"]}>
          <span
            className={[
              styles["card__heading-span"],
              styles[`card__heading-span--${props.id}`]
            ].join(" ")}
          >
            {props.title}
          </span>
        </h4>
        <div className={styles["card__details"]}>
          <ul>
            <li>3 day tours</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: easy</li>
          </ul>
        </div>
      </div>
      <div
        className={[
          styles["card__side"],
          styles["card__side--back"],
          styles[`card__side--back-${props.id}`]
        ].join(" ")}
      >
        <div className={styles["card__cta"]}>
          <div className={styles["card__price-box"]}>
            <p className={styles["card__price-only"]}>Only</p>
            <p className={styles["card__price-value"]}>$297</p>
          </div>
          <a
            href="#popup"
            className={[styles["btn"], styles["btn--white"]].join(" ")}
          >
            Book now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tour;
