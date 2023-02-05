import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { DARK_MODE } from "../../../constants/const";

import styles from "./Logo.module.scss";

const Logo = () => {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div className={styles.logoWrapper}>
      <Link to="/">
        <div>
          <div>
            <span>M</span>
          </div>
          <div className={styles.logoRightPart}>
            <p
              className={
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              }
            >
              Karen
            </p>
            <p
              className={
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              }
            >
              anasyan
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
