import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.intro__content}>
              <h2 className={styles.intro__title}>
                Hi, I’m Andrii. Nice to meet you.
              </h2>
              <p className={styles.intro__text}>
                Front-end Developer with extensive experience in crafting
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

export default Intro;
