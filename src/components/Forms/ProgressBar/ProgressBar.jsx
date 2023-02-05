import React from "react";

import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ percent }) => {
  return (
    <div className={styles.progressBar}>
      <div style={{ width: `${percent}%` }} className={styles.result}></div>
    </div>
  );
};

export default ProgressBar;
