import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import ServiceItem from "./../../components/UI/ServiceItem/ServiceItem";
import { DARK_MODE, services } from "../../constants/const";

import styles from "./ServicesPage.module.scss";

const ServicesPage = () => {
  const mode = useSelector((state) => state.mode.value);
  const { t } = useTranslation();
  
  return (
    <div className={`content ${
      mode === DARK_MODE ? "dark-bg-color" : "light-bg-color"
    }`}>
      <div className={styles.servicesPage}>
        <div className="page-caption">
          <h1>{t("ss")}</h1>
        </div>
        <div className={styles.servicesList}>
          {services.map((dataService) => {
            return (
              <ServiceItem key={dataService.name} dataService={dataService} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
