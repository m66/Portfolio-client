import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import PortfolioItem from "../../components/UI/PortfolioItem/PortfolioItem";
import { DARK_MODE, portfolio } from "../../constants/const";

import styles from "./PortfolioPage.module.scss";

const PortfolioPage = () => {
  const mode = useSelector((state) => state.mode.value);
  const { t } = useTranslation();

  return (
    <div
      className={`content ${
        mode === DARK_MODE ? "dark-bg-color" : "light-bg-color"
      }`}
    >
      <div className={styles.portfolioPage}>
        <div className="page-caption">
          <h1>{t('portfolio')}</h1>
        </div>
        <div className={styles.projects}>
          <h2>{t('mcp')}</h2>
          <div className={styles.projectsListWrapper}>
            <div className={styles.projectsList}>
              {portfolio.map((dataItem) => {
                return (
                  <PortfolioItem key={dataItem.title} dataItem={dataItem} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
