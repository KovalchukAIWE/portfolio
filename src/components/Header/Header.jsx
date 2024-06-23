import Contacts from "../Contacts/Contacts";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Contacts />
    </div>
  );
};

export default Header;
