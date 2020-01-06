import React from "react";
import styles from "./Story.module.scss";
function Story(props) {
  return (
    <div className={styles.story}>
      <figure className={styles["story__shape"]}>
        <img
          src={props.img}
          alt="Person in a tour"
          className={styles["story__img"]}
        />
        <figcaption className={styles["story__caption"]}>
          {props.name}
        </figcaption>
      </figure>
      <div className={styles["story__text"]}>
        <h3
          className={[
            styles["heading-tertiary"],
            styles["u-margin-bottom-small"]
          ].join(" ")}
        >
          {props.title}
        </h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Story;
