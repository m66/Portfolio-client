import React from "react";

import profileImg from "../../../assets/images/cv1.jpeg";

import styles from "./HomeImg.module.scss";

const HomeImg = () => {
  return (
    <div className={styles.imgWrapper}>
      <img src={profileImg} alt="Karen Manasyan Img" />
    </div>
  );
};

export default HomeImg;
