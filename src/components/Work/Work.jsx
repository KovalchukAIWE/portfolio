import Projects from "../Projects/Projects";
import styles from "./Work.module.scss";

const Work = () => {
  return (
    <section className={styles.work}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.work__content}>
              <h2 className={styles.work__title}>My Recent Work</h2>
              <p className={styles.work__text}>
                Here are a few past design of projects I have worked on
              </p>
            </div>
            <Projects />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
