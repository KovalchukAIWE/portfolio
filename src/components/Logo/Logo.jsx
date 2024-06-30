import logo from "../../images/logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__image} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
