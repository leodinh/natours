import React, { useState } from "react";
import styles from "./Footer.module.scss";
import LogoSmall from "../../assets/img/logo-green-1x.png";
import LogoLarge from "../../assets/img/logo-green-2x.png";
import LogoForPhoneSmall from "../../assets/img/logo-green-small-1x.png";
import LogoForPhoneLarge from "../../assets/img/logo-green-small-2x.png";
function Footer() {
  const navigationsList = useState([
    "Company",
    "Contact us",
    "Careers",
    "Privacy policy",
    "Terms"
  ])[0];
  return (
    <div className={styles.footer}>
      <div className={styles["footer__logo-box"]}>
        <picture className={styles["footer__logo"]}>
          <source
            srcSet={`${LogoForPhoneSmall} 1x, ${LogoForPhoneLarge} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${LogoSmall} 1x, ${LogoLarge} 2x`}
            alt="Full Logo"
            className={styles["footer__logo"]}
          />
        </picture>
      </div>
      <div className={styles.row}>
        <div className={styles["col-1-of-2"]}>
          <div className={styles["footer__navigation"]}>
            <ul className={styles["footer__list"]}>
              {navigationsList.map(nav => (
                <li className={styles["footer__item"]} key={nav}>
                  <a href="#navigation" className={styles["footer__link"]}>
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["col-1-of-2"]}>
          <p className={styles["footer__copyright"]}>
            Build my{" "}
            <a href="#reference" className={styles["footer__link"]}>
              Jonas Schmedtmann
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
