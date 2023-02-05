import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import Button from "../../components/Forms/Button/Button";
import HomeImg from "../../components/UI/HomeImg/HomeImg";
import { DARK_MODE } from "../../constants/const";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const mode = useSelector((state) => state.mode.value);
  const { t } = useTranslation();

  return (
    <div
      className={`content ${
        mode === DARK_MODE ? "dark-bg-color" : "light-bg-color"
      }`}
    >
      <div className={styles.homePage}>
        <div className={styles.contentWrapper}>
          <h2>
            {t("hello")} <span>{t("flName")}</span>
          </h2>
          <div className={styles.mobileImg}>
            <div className={styles.mobileImgWrapper}>
              <HomeImg />
            </div>
          </div>
          <h3>
            {t("as")} <span>{t("wd")}</span>
          </h3>
          <p>{t("hpText")}</p>
          <div className={styles.btnWrapper}>
          <Link to="/about">
            <Button type="primary">{t("mam")}</Button>
          </Link>
          </div>
        </div>
        <div className={styles.desctopImg}>
          <HomeImg />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
