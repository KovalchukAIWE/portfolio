import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape, false);
      return () => {
        document.removeEventListener("keydown", handleEscape, false);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
