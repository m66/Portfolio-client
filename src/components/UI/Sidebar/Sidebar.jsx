import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUser,
  faList,
  faBriefcase,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import { DARK_MODE } from "../../../constants/const";
import Logo from "../Logo/Logo";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const homeIcon = <FontAwesomeIcon icon={faHouseChimney} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const listIcon = <FontAwesomeIcon icon={faList} />;
  const caseIcon = <FontAwesomeIcon icon={faBriefcase} />;
  const messageIcon = <FontAwesomeIcon icon={faMessage} />;

  const mode = useSelector((state) => state.mode.value);

  const { t } = useTranslation();


  return (
    <div
      className={`${styles.sidebar} ${
        mode === DARK_MODE ? "sidebar-dark-bg-color dark-box-shadow" : "sidebar-light-bg-color light-box-shadow"
      }`}
    >
      <Logo />
      <div className={styles.navbarWrapper}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={`${(navData) => (navData.isActive ? "active" : "")} ${
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              } `}
            >
              {homeIcon} {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`${(navData) => (navData.isActive ? "active" : "")} ${
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              } `}
            >
              {userIcon} {t('about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sevices"
              className={`${(navData) => (navData.isActive ? "active" : "")} ${
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              } `}
            >
              {listIcon} {t('services')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={`${(navData) => (navData.isActive ? "active" : "")} ${
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              } `}
            >
              {caseIcon} {t('portfolio')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`${(navData) => (navData.isActive ? "active" : "")} ${
                mode === DARK_MODE ? "light-text-color" : "dark-text-color"
              } `}
            >
              {messageIcon} {t('contact')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
