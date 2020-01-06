import React from "react";
import styles from "./Booking.module.scss";
function Booking() {
  return (
    <div className={styles["book"]}>
      <div className={styles["row"]}>
        <div className={styles["book-box"]}>
          <div className={styles["book-box__form"]}>
            <form className={styles["form"]}>
              <div className={styles["u-margin-bottom-big"]}>
                <h2 className={styles["heading-secondary"]}>
                  Start booking now
                </h2>
              </div>
              <div className={styles["form__group"]}>
                <input
                  type="text"
                  id="name"
                  className={styles["form__input"]}
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name" className={styles["form__label"]}>
                  Full name
                </label>
              </div>
              <div className={styles["form__group"]}>
                <input
                  type="email"
                  id="email"
                  className={styles["form__input"]}
                  placeholder="Email address"
                  required
                />
                <label htmlFor="email" className={styles["form__label"]}>
                  Email
                </label>
              </div>
              <div
                className={[
                  styles["form__group"],
                  styles["u-margin-bottom-medium"]
                ].join(" ")}
              >
                <div className={styles["form__radio-group"]}>
                  <input
                    type="radio"
                    className={styles["form__radio-input"]}
                    id="small"
                    name="size"
                  />
                  <label
                    htmlFor="small"
                    className={styles["form__radio-label"]}
                  >
                    <span className={styles["form__radio-button"]}></span>
                    Small tour group
                  </label>
                </div>
                <div className={styles["form__radio-group"]}>
                  <input
                    type="radio"
                    className={styles["form__radio-input"]}
                    id="large"
                    name="size"
                  />
                  <label
                    htmlFor="large"
                    className={styles["form__radio-label"]}
                  >
                    <span className={styles["form__radio-button"]}></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className={styles["form__group"]}>
                <button
                  className={[styles["btn"], styles["btn--green"]].join(" ")}
                >
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
