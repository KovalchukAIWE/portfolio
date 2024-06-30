import logo from "../../images/logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logo__link}>
        <img className={styles.logo__image} src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
