import Contacts from "../Contacts/Contacts";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.header__wrapper}>
              <Logo />
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
