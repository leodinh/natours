import React, { useState } from "react";
import Tour from "./Tour/Tour";
import styles from "./Tours.module.scss";
function Tours() {
  const toursList = useState([
    { id: 1, title: "The Sea Explorer" },
    { id: 2, title: "The Forest Hiker" },
    { id: 3, title: "The Snow Adventurer" }
  ])[0];
  return (
    <div className={styles.tours}>
      <div
        className={[
          styles["u-center-text"],
          styles["u-margin-bottom-big"]
        ].join(" ")}
      >
        <h2 className={styles["heading-secondary"]}>Most popular tours</h2>
      </div>
      <div className={styles.row}>
        {toursList.map(tour => (
          <div className={styles["col-1-of-3"]} key={tour.id}>
            <Tour id={tour.id} title={tour.title} />
          </div>
        ))}
      </div>
      <div
        className={[
          styles["u-center-text"],
          styles["u-margin-bottom-big"]
        ].join(" ")}
      >
        <a
          href="#tours"
          className={[styles["btn"], styles["btn--green"]].join(" ")}
        >
          Discover all tours
        </a>
      </div>
    </div>
  );
}

export default Tours;
