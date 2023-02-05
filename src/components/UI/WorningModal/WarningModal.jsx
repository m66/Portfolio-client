import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Modal from "../../../shared/Modal/Modal";

import styles from "./WarningModal.module.scss";

const WarningModal = ({ handleClose }) => {
  const warningSign = <FontAwesomeIcon icon={faTriangleExclamation} />;

  return (
    <Modal handleClose={handleClose}>
      <div className={styles.warningModal}>
        <div>{warningSign}</div>
        <h1>Warning!</h1>
        <p>The page is not fully ready at the moment!</p>
      </div>
    </Modal>
  );
};

export default WarningModal;
