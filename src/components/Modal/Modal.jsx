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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M25.0745 25.1346L7.47542 7.5355C7.40249 7.46257 7.30358 7.4216 7.20044 7.4216C7.0973 7.4216 6.99838 7.46257 6.92545 7.5355C6.85252 7.60843 6.81155 7.70735 6.81155 7.81049C6.81155 7.91363 6.85252 8.01254 6.92545 8.08547L24.5246 25.6846C24.5975 25.7575 24.6964 25.7985 24.7995 25.7985C24.9027 25.7985 25.0016 25.7575 25.0745 25.6846C25.1475 25.6116 25.1884 25.5127 25.1884 25.4096C25.1884 25.3064 25.1475 25.2075 25.0745 25.1346Z"
              stroke="#151515"
            />
            <path
              d="M24.1712 7.18195L6.57214 24.781C6.40545 24.9477 6.31179 25.1738 6.31179 25.4096C6.31179 25.6453 6.40545 25.8714 6.57214 26.0381C6.73884 26.2048 6.96494 26.2985 7.20068 26.2985C7.43643 26.2985 7.66252 26.2048 7.82922 26.0381L25.4283 8.43903C25.595 8.27233 25.6887 8.04624 25.6887 7.81049C25.6887 7.57474 25.595 7.34865 25.4283 7.18195C25.2616 7.01525 25.0355 6.9216 24.7998 6.9216C24.564 6.9216 24.3379 7.01525 24.1712 7.18195Z"
              fill="#151515"
            />
          </svg>
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
