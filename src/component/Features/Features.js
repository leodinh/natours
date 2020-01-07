import React, { useState } from "react";
import styles from "./Features.module.scss";
import { basic_world } from "react-icons-kit/linea/basic_world";
import { basic_compass } from "react-icons-kit/linea/basic_compass";
import { basic_map } from "react-icons-kit/linea/basic_map";
import { basic_heart } from "react-icons-kit/linea/basic_heart";
import Feature from "./Feature/Feature";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
function Features() {
  const featuresList = useState([
    {
      id: 0,
      icon: basic_world,
      title: "Explore the world",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 1,
      icon: basic_compass,
      title: "Meet nature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 2,
      icon: basic_map,
      title: "Find your way",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 3,
      icon: basic_heart,
      title: "Live a heathier life",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ])[0];
  return (
    <div className={styles.features}>
      <div className={styles.row}>
        {featuresList.map(feature => (
          <div className={styles["col-1-of-4"]} key={feature.id}>
            <ScrollAnimation animateIn="lightSpeedIn">
              <Feature
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
              />
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
