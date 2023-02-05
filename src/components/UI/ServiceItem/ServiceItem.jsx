import React from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faMobileScreenButton,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";

import { DARK_MODE } from "../../../constants/const";

import styles from "./ServiceItem.module.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

const iconsObj = {
  web_design: faLaptopCode,
  back_end: faServer,
  mobile: faMobileScreenButton,
  help: faHandshakeAngle,
};

const ServiceItem = ({ dataService }) => {
  const mode = useSelector((state) => state.mode.value);
  const { name, icon, tr_name, tr_desc } = dataService;
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.serviceItem} ${
        mode === DARK_MODE
          ? "sidebar-dark-bg-color dark-border"
          : "white-bg-color light-border"
      }`}
    >
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={iconsObj[icon]} />
        </div>
      </div>
      <div className={styles.caption}>{tr_name ? t(tr_name) : name}</div>
      <div
        className={`${styles.description} ${
          mode === DARK_MODE ? "light-gray-text-color" : "dark-gray-text-color"
        }`}
      >
        {t(tr_desc)}
      </div>
    </div>
  );
};

export default ServiceItem;
