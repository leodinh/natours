import React from "react";
import styles from "./Feature.module.scss";
import { Icon } from "react-icons-kit";
function Feature(props) {
  return (
    <div className={styles["feature-box"]}>
      <div className={styles["feature-box__icon"]}>
        <Icon size={64} icon={props.icon} />
      </div>
      <h3
        className={[
          styles["heading-tertiary"],
          styles["u-magin-bottom-small"]
        ].join(" ")}
      >
        {props.title}
      </h3>
      <p className={styles["feature-box__text"]}>{props.content}</p>
    </div>
  );
}

export default Feature;
