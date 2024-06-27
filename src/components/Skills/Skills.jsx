import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__wrapper}>
        <h2 className={styles.skills__title}>Skills</h2>
        <p className={styles.skills__subtitle}>
          I like to code things from Figma, and enjoy bringing ideas to life in
          the browser.
        </p>
        <div className={styles.skills__blocks}>
          <div className={styles.skills__block}>
            <p className={styles.skills__blockTitle}>technologies</p>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>HTML</li>
              <li>CSS/Sass (BEM)</li>
              <li>Bootstrap layout</li>
              <li>React.js (hooks)</li>
              <li>Redux</li>
              <li>Rest API</li>
              <li>Laravel Blade</li>
            </ul>
          </div>
          <div className={styles.skills__block}>
            <p className={styles.skills__blockTitle}>TOOLS</p>
            <ul>
              <li>Axios</li>
              <li>Chart.js</li>
              <li>Splide.js</li>
              <li>clsx</li>
              <li>React table</li>
              <li>React hook form</li>
              <li>Yup</li>
              <li>AOS</li>
              <li>Lottie</li>
              <li>React Fast Marquee</li>
              <li>TradingView</li>
            </ul>
          </div>
          <div className={styles.skills__block}>
            <p className={styles.skills__blockTitle}>
              project management tools
            </p>
            <ul>
              <li>Git</li>
              <li>Jira</li>
              <li>Bitbucket</li>
              <li>Confluence</li>
            </ul>
            <p className={styles.skills__blockTitle}>design tools</p>
            <ul>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
