import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.scss";

const Marquees = () => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      className={styles.marquee}
    >
      <p className={styles.marquee__item}>HTML</p>
      <p className={styles.marquee__item}>CSS</p>
      <p className={styles.marquee__item}>JavaScript</p>
      <p className={styles.marquee__item}>React</p>
      <p className={styles.marquee__item}>React Hooks</p>
      <p className={styles.marquee__item}>Redux</p>
      <p className={styles.marquee__item}>Rest API</p>
      <p className={styles.marquee__item}>MongoDB</p>
      <p className={styles.marquee__item}>Laravel Blade</p>
      <p className={styles.marquee__item}>Git</p>
      <p className={styles.marquee__item}>Figma</p>
      <p className={styles.marquee__item}>Confluence</p>
      <p className={styles.marquee__item}>Bitbucket</p>
      <p className={styles.marquee__item}>Jira</p>
      <p className={styles.marquee__item}>TradingView</p>
      <p className={styles.marquee__item}>React Fast Marquee</p>
      <p className={styles.marquee__item}>Lottie</p>
      <p className={styles.marquee__item}>AOS</p>
      <p className={styles.marquee__item}>clsx</p>
      <p className={styles.marquee__item}>Splide.js</p>
      <p className={styles.marquee__item}>Chart.js</p>
      <p className={styles.marquee__item}>Axios</p>
    </Marquee>
  );
};

export default Marquees;
