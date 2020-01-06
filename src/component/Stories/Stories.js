import React, { useState } from "react";
import styles from "./Stories.module.scss";
import Comment1 from "../../assets/img/nat-8.jpg";
import Comment2 from "../../assets/img/nat-9.jpg";
import Video from "../../assets/img/video.mp4";
import VideoWeb from "../../assets/img/video.webm";
import Story from "./Story/Story";
function Stories() {
  const storiesList = useState([
    {
      img: Comment1,
      name: "Mary Smith",
      title: "I have best weekend with my family",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
      img: Comment2,
      name: "Jack Wilson",
      title: "Wow! My life is completely different now",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    }
  ])[0];
  return (
    <div className={styles.stories}>
      <div className={styles["bg-video"]}>
        <video className={styles["bg-video__content"]} autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src={VideoWeb} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div
        className={[
          styles["u-center-text"],
          styles["u-margin-bottom-big"]
        ].join(" ")}
      >
        <h2 className={styles["heading-secondary"]}>
          We make people genuinely happy
        </h2>
      </div>
      <div className={styles.row}>
        {storiesList.map(story => (
          <Story
            img={story.img}
            name={story.name}
            title={story.title}
            content={story.content}
            key={story.name}
          />
        ))}
      </div>
      <div
        className={[
          styles["u-center-text"],
          styles["u-margin-bottom-small"]
        ].join(" ")}
      >
        <a
          href="#story"
          className={[styles["btn"], styles["btn--green"]].join(" ")}
        >
          Read all stories &rarr;
        </a>
      </div>
    </div>
  );
}

export default Stories;
