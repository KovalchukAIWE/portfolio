import Project from "../Project/Project";
import styles from "./Work.module.scss";

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.work__content}>
        <h2 className={styles.work__title}>My Recent Work</h2>
        <p className={styles.work__text}>
          Here are a few past design projects I have worked on
        </p>
      </div>
      <Project />
    </div>
  );
};

export default Work;
