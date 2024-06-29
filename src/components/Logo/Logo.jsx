import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logo__link}>
        AK
      </a>
    </div>
  );
};

export default Logo;
