import React from "react";
import { useSelector } from "react-redux";

import { DARK_MODE } from "../../../constants/const";

import styles from "./input.module.scss";

const Input = (props) => {
  const mode = useSelector((state) => state.mode.value);
  let inputElement = null;

  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          className={`${styles.inputElement} ${
            mode === DARK_MODE
              ? "sidebar-dark-bg-color dark-border"
              : "white-bg-color light-border"
          }`}
          {...props}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={`${styles.textareaElement} ${
            mode === DARK_MODE ? "sidebar-dark-bg-color dark-border" : "white-bg-color light-border"
          }`}
          {...props}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={`${styles.inputElement} ${
            mode === DARK_MODE ? "sidebar-dark-bg-color" : "white-bg-color"
          }`}
          {...props}
        />
      );
  }

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
