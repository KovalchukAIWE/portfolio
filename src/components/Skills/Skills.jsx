import Particle from "../Particles/Particles";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Particle />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className={styles.skills__wrapper}>
              <h2 className={styles.skills__title}>Skills</h2>
              <p className={styles.skills__subtitle}>
                I like to code things from Figma, and enjoy bringing ideas to
                life in the browser.
              </p>
              <div className={styles.skills__blocks}>
                <div className={styles.skills__block}>
                  <p className={styles.skills__blockTitle}>technologies</p>
                  <ul>
                    <li className={styles.skills__blockItem}>
                      JavaScript/TypeScript
                    </li>
                    <li className={styles.skills__blockItem}>HTML</li>
                    <li className={styles.skills__blockItem}>CSS/Sass (BEM)</li>
                    <li className={styles.skills__blockItem}>
                      Bootstrap layout
                    </li>
                    <li className={styles.skills__blockItem}>
                      React.js (hooks)
                    </li>
                    <li className={styles.skills__blockItem}>Redux</li>
                    <li className={styles.skills__blockItem}>Rest API</li>
                    <li className={styles.skills__blockItem}>Laravel Blade</li>
                  </ul>
                </div>
                <div className={styles.skills__block}>
                  <p className={styles.skills__blockTitle}>TOOLS</p>
                  <ul>
                    <li className={styles.skills__blockItem}>Axios</li>
                    <li className={styles.skills__blockItem}>Chart.js</li>
                    <li className={styles.skills__blockItem}>Splide.js</li>
                    <li className={styles.skills__blockItem}>clsx</li>
                    <li className={styles.skills__blockItem}>React table</li>
                    <li className={styles.skills__blockItem}>
                      React hook form
                    </li>
                    <li className={styles.skills__blockItem}>Yup</li>
                    <li className={styles.skills__blockItem}>AOS</li>
                    <li className={styles.skills__blockItem}>MongoDB</li>
                    <li className={styles.skills__blockItem}>Lottie</li>
                    <li className={styles.skills__blockItem}>
                      React Fast Marquee
                    </li>
                    <li className={styles.skills__blockItem}>TradingView</li>
                  </ul>
                </div>
                <div className={styles.skills__block}>
                  <p className={styles.skills__blockTitle}>
                    project management tools
                  </p>
                  <ul>
                    <li className={styles.skills__blockItem}>Git</li>
                    <li className={styles.skills__blockItem}>Jira</li>
                    <li className={styles.skills__blockItem}>Bitbucket</li>
                    <li className={styles.skills__blockItem}>Confluence</li>
                  </ul>
                  <p className={styles.skills__blockTitle}>design tools</p>
                  <ul>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
