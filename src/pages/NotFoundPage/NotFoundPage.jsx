import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Button from "../../components/Forms/Button/Button";
import { DARK_MODE } from "../../constants/const";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const mode = useSelector((state) => state.mode.value);
  const { t } = useTranslation();

  return (
    <div
      className={`content ${
        mode === DARK_MODE ? "dark-bg-color" : "light-bg-color"
      }`}
    >
      <div className={styles.errorPage}>
        <h1>404</h1>
        <h2>{t("error_page_title")}</h2>
        <p>{t("error_page_desc")}</p>
        <Link to="/">
          <Button type="primary">{t("error_page_btn")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
