import closeIcon from '../../assets/images/x.svg';

import styles from "./modal.module.scss";

const Modal = ({ handleClose, children }) => {
  return (
    <>
      <div className={styles.backDrop} onClick={handleClose}></div>
      <div className={styles.modal}>
        <span className={styles.closeBtn} onClick={handleClose}>
          <img src={closeIcon} alt="" />
        </span>
        <div className={styles.modalWrapper}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
