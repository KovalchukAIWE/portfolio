import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.introduction__content}>
              <h2 className={styles.introduction__title}>
                Hi, I am Andrii. Nice to meet you.
              </h2>
              <p className={styles.introduction__text}>
                Front-end Developer with extensive experience in creating
                responsive, high-performance websites and applications. Adept in
                HTML, CSS, JavaScript, React, and modern development tools.
                Committed to clean, maintainable code and exceptional user
                experiences. Proven ability to collaborate effectively in team
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
