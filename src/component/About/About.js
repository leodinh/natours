import React, { useState } from "react";
import styles from "./About.module.scss";
import Photo1 from "../../assets/img/nat-1-large.jpg";
import Photo2 from "../../assets/img/nat-2-large.jpg";
import Photo3 from "../../assets/img/nat-3-large.jpg";
import Photo1Small from "../../assets/img/nat-1.jpg";
import Photo2Small from "../../assets/img/nat-2.jpg";
import Photo3Small from "../../assets/img/nat-3.jpg";
function About() {
  const imgList = useState([
    {
      id: 1,
      src: Photo1,
      srcSet: `${Photo1Small} 300w, ${Photo1} 1000w`,
      alt: "Photo 1"
    },
    {
      id: 2,
      src: Photo2,
      srcSet: `${Photo2Small} 300w, ${Photo2} 1000w`,
      alt: "Photo 2"
    },
    {
      id: 3,
      src: Photo3,
      srcSet: `${Photo3Small} 300w, ${Photo3} 1000w`,
      alt: "Photo 3"
    }
  ])[0];
  return (
    <div className={styles.about}>
      <div
        className={[
          styles["u-center-text"],
          styles["u-margin-bottom-big"]
        ].join(" ")}
      >
        <h2 className={styles["heading-secondary"]}>
          Exciting tours for adventuour people
        </h2>
      </div>
      <div className={styles.row}>
        <div className={styles["col-1-of-2"]}>
          <h3
            className={[
              styles["heading-tertiary"],
              styles["u-margin-bottom-small"]
            ].join(" ")}
          >
            You're going to fall in love with nature
          </h3>
          <p className={styles["paragraph"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h3
            className={[
              styles["heading-tertiary"],
              styles["u-margin-bottom-small"]
            ].join(" ")}
          >
            Live adventures like you never have before
          </h3>
          <p className={styles["paragraph"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#learn" className={styles["btn-text"]}>
            Learn more &rarr;
          </a>
        </div>
        <div className={styles["col-1-of-2"]}>
          <div className={styles["composition"]}>
            {imgList.map(img => (
              <img
                srcSet={img.srcSet}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                src={img.src}
                alt={img.alt}
                key={img.id}
                className={[
                  styles["composition__photo"],
                  styles[`composition__photo--p${img.id}`]
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
