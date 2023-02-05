import React from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { DARK_MODE } from "../../../constants/const";

import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({ dataItem }) => {
  const { title, imgUrl, link } = dataItem;
  const mode = useSelector((state) => state.mode.value);
  const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;

  return (
    <div
      className={`${styles.projectItem} ${
        mode === DARK_MODE
          ? "sidebar-dark-bg-color dark-border"
          : "white-bg-color light-border"
      }`}
    >
      <div className={styles.img}>
        <img src={require(`../../../assets/images/${imgUrl}`)} alt="" />
      </div>
      <div
        className={`${styles.title} ${
          mode === DARK_MODE ? "light-text-color" : "dark-text-color"
        }`}
      >
        {title}
      </div>
      <div className={styles.backdrop}>
        <div className={styles.linksWrapper}>
          <a href={link} target="_blank" rel="noreferrer">
            {gitHubIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
