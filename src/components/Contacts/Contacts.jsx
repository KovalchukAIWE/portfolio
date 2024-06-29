import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <p>
        <a className={styles.contacts__info} href="tel:+18624007405">
          +1(862)400-7405
        </a>
      </p>
      <p>
        <a
          className={styles.contacts__info}
          href="mailto:kovalchukaiwe@gmail.com"
        >
          kovalchukaiwe@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contacts;
