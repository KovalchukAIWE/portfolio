import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__wrapper}>
        <h2>Skills</h2>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>
    </div>
  );
};

export default Skills;
