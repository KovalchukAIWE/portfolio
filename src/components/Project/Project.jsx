import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Project.module.scss";
import Modal from "../Modal/Modal";

const Project = ({ imageSrc, altText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.project}>
      <button
        className={styles.project__button}
        onClick={openModal}
        type="button"
        aria-label="Open project overview"
      >
        overview
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img className={styles.project__image} src={imageSrc} alt={altText} />
      </Modal>
    </div>
  );
};

Project.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Project;
