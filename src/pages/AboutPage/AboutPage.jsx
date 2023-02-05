import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DARK_MODE, user } from "../../constants/const";
import Button from "../../components/Forms/Button/Button";
import ProgressBar from "../../components/Forms/ProgressBar/ProgressBar";

import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;
  const mode = useSelector((state) => state.mode.value);
  const { t } = useTranslation();

  return (
    <div
      className={`content ${
        mode === DARK_MODE ? "dark-bg-color" : "light-bg-color"
      }`}
    >
      <div className={styles.aboutPage}>
        <div className="page-caption">
          <h1>{t("am")}</h1>
        </div>
        <div className={styles.description}>
          <h2>
            {t("ikm")} <span>{t("wd")}</span>
          </h2>
          <p>{t("desc")}</p>
        </div>
        <div className={styles.userInfo}>
          <div>
            <h2>{t("pi")}</h2>
            <ul className={styles.infoList}>
              {user.info.map(({ key, value, url, tr_key, tr_value }) => {
                return (
                  <li key={key}>
                    {t(tr_key) ? t(tr_key) : key}:{" "}
                    {url ? (
                      <a
                        className={
                          mode === DARK_MODE
                            ? "light-text-color"
                            : "dark-text-color"
                        }
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {tr_value !== undefined ? t(tr_value) : value}
                        {console.log(tr_value)}
                      </a>
                    ) : (
                      value
                    )}
                  </li>
                );
              })}
            </ul>
            <div className={styles.desctopBtns}>
              <div className={styles.btnWrapper}>
                <a href="./Karen_Manasyan_CV.pdf" download>
                  <Button type="primary">{t("dowCV")}</Button>
                </a>
                <div className={styles.hmBtn}>
                  <Link to="/contact">
                    <Button type="primary">{t("hm")}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>{t("skills")}</h2>
            <ul className={styles.skillsList}>
              {user.skills.map(({ skillName, percentKnowledge }) => {
                return (
                  <li key={`${skillName}-${Math.random()}`}>
                    <div>
                      <div>{skillName}</div>
                      <div>{percentKnowledge}%</div>
                    </div>
                    <ProgressBar percent={percentKnowledge} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.edex}>
          <div className={styles.education}>
            <h2>{t("ed")}</h2>
            <div className={styles.timelineBox}>
              <div
                className={`${styles.timeline} ${
                  mode === DARK_MODE
                    ? "sidebar-dark-bg-color dark-border"
                    : "white-bg-color light-border"
                }`}
              >
                {user.education.map(
                  ({
                    degree,
                    startDate,
                    endDate,
                    tr_faculty,
                    tr_description,
                  }) => {
                    return (
                      <div
                        className={styles.timelineItem}
                        key={`${degree}-${Math.random()}`}
                      >
                        <div className={styles.circleDot}></div>
                        <h3
                          className={`${styles.timelineDate} ${
                            mode === DARK_MODE
                              ? "light-gray-text-color"
                              : "dark-gray-text-color"
                          }`}
                        >
                          {calendarIcon} {startDate} - {endDate}
                        </h3>
                        <h4 className={styles.timelineTitle}>
                          {t(tr_faculty)}
                        </h4>
                        <p
                          className={`${styles.timelineText} ${
                            mode === DARK_MODE
                              ? "light-text-color"
                              : "dark-text-color"
                          }`}
                        >
                          {t(tr_description)}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <h2>{t("ex")}</h2>
            <div className={styles.timelineBox}>
              <div
                className={`${styles.timeline} ${
                  mode === DARK_MODE
                    ? "sidebar-dark-bg-color dark-border"
                    : "white-bg-color light-border"
                }`}
              >
                {user.experience.map(
                  ({
                    companyName,
                    startDate,
                    endDate,
                    utilized,
                    tr_position,
                    tr_type,
                  }) => {
                    return (
                      <div
                        className={styles.timelineItem}
                        key={`${companyName}-${Math.random()}`}
                      >
                        <div className={styles.circleDot}></div>
                        <h3
                          className={`${styles.timelineDate} ${
                            mode === DARK_MODE
                              ? "light-gray-text-color"
                              : "dark-gray-text-color"
                          }`}
                        >
                          {calendarIcon} {startDate} - {endDate}
                        </h3>
                        <h4 className={styles.timelineTitle}>{companyName}</h4>
                        <h5 className={styles.timelinePosition}>
                          {t(tr_position)}
                        </h5>
                        <h5 className={styles.timelineType}>
                          {tr_type && t(tr_type)}
                        </h5>
                        <p
                          className={`${styles.timelineText} ${
                            mode === DARK_MODE
                              ? "light-gray-text-color"
                              : "dark-gray-text-color"
                          }`}
                        >
                          <span>{t("ut")}:</span> {utilized}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileBtns}>
          <div className={styles.btnWrapper}>
            <a href="./Karen_Manasyan_CV.pdf" download>
              <Button type="primary">Download CV</Button>
            </a>
            <Button type="primary">Hire Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
