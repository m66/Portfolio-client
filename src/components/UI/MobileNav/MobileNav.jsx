import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUser,
  faList,
  faBriefcase,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import "./MobileNav.scss";
import { DARK_MODE } from "../../../constants/const";

const homeIcon = <FontAwesomeIcon icon={faHouseChimney} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;
const listIcon = <FontAwesomeIcon icon={faList} />;
const caseIcon = <FontAwesomeIcon icon={faBriefcase} />;
const messageIcon = <FontAwesomeIcon icon={faMessage} />;

const MobileNav = () => {
  const list = document.querySelectorAll(".list");
  const mode = useSelector((state) => state.mode.value);

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  }
  list.forEach((item) => {
    item.addEventListener("click", activeLink);
  });

  return (
    <div className="mobileNav">
      <div className={`navigation ${mode === DARK_MODE ? "white-bg-color" : "dark-bg-color"}`}>
        <ul>
          <li className="list">
            <NavLink
              to="/about"
              // className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className={`icon ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>{userIcon}</span>
              <span className={`text ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>About</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink
              to="/sevices"
              // className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className={`icon ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>{listIcon}</span>
              <span className={`text ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>Services</span>
            </NavLink>
          </li>
          <li className="list active">
            <NavLink
              to="/"
              // className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className={`icon ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>{homeIcon}</span>
              <span className={`text ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>Home</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink
              to="/portfolio"
              // className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className={`icon ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>{caseIcon}</span>
              <span className={`text ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>Portfolio</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink
              to="/contact"
              // className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className={`icon ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>{messageIcon}</span>
              <span className={`text ${mode === DARK_MODE ? "dark-text-color" : "light-text-color"}`}>Contact</span>
            </NavLink>
          </li>
          <div className={`indicator ${mode === DARK_MODE ? "dark-indicator-border" : "light-indicator-border"}`} ></div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
