import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

import Input from "../../components/Forms/Input/Input";
import Button from "../../components/Forms/Button/Button";
import { DARK_MODE } from "../../constants/const";

import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const mode = useSelector((state) => state.mode.value);

  function getData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/postFormData", {
        ...formData,
      })
      .then((res) => alert(res.data));
  }

  function onChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div
      className={`content ${
        mode === DARK_MODE ? "dark-bg-color" : "light-bg-color"
      }`}
    >
      <div className={styles.contactPage}>
        <div className="page-caption">
          <h1>{t("cm")}</h1>
        </div>
        <div className={styles.contactsSection}>
          <h3>{t("hyaq")}</h3>
          <h4>{t("ys")}</h4>
          <div className={styles.contacts}>
            <div className={styles.contactsItem}>
              <FontAwesomeIcon icon={faPhone} />
              <p>{t("cuo")}</p>
              <a
                href="tel:+37477662608"
                className={
                  mode === DARK_MODE ? "light-text-color" : "dark-text-color"
                }
              >
                +374-(77)-662-608
              </a>
            </div>
            <div className={styles.contactsItem}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{t("office")}</p>
              <address>{t("cityName")}</address>
            </div>
            <div className={styles.contactsItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>{t("email")}</p>
              <a
                href="mailto: kar.manasyan98@gmail.com"
                className={
                  mode === DARK_MODE ? "light-text-color" : "dark-text-color"
                }
              >
                kar.manasyan98@gmail.com
              </a>
            </div>
            <div className={styles.contactsItem}>
              <FontAwesomeIcon icon={faEarthAsia} />
              <p>{t("wb")}</p>
              <a
                href="www.google.com"
                className={
                  mode === DARK_MODE ? "light-text-color" : "dark-text-color"
                }
              >
                www.manasyan.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.emailSection}>
          <h3>{t("smae")}</h3>
          <h4>{t("ivrtm")}</h4>
          <div className={styles.formSection}>
            <form action="">
              <div className={styles.inputsWrapper}>
                <Input
                  elementtype="input"
                  placeholder={t("name")}
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                />
                <Input
                  elementtype="input"
                  placeholder={t("email")}
                  value={formData.email}
                  name="email"
                  onChange={onChange}
                />
              </div>
              <Input
                elementtype="input"
                placeholder={t("subject")}
                value={formData.subject}
                name="subject"
                onChange={onChange}
              />
              <Input
                elementtype="textarea"
                placeholder={t("message")}
                value={formData.message}
                name="message"
                onChange={onChange}
              />
              <div className={styles.btnWrapper}>
                <Button type="primary" onClick={getData}>
                  {t("sm")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
