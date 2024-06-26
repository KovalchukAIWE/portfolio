import clsx from "clsx";
import styles from "./Hero.module.scss";
import imageOne from "../../images/code-thinking.svg";
import imageTwo from "../../images/coding.svg";
import imageThree from "../../images/developer.svg";
import imageFour from "../../images/devices.svg";
import imageFive from "../../images/join.svg";
import imageSix from "../../images/office.svg";
import imageEight from "../../images/user.svg";
import imageNine from "../../images/version-control.svg";
import avatar from "../../images/myAvatar.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>Front-End Developer</h1>
      <p className={styles.hero__subtitle}>
        I code beautifully simple things, and I love what I do.
      </p>
      <div className={styles.hero__images}>
        <img className={styles.hero__avatar} src={avatar} />
        <img
          className={clsx(styles.hero__image, styles.hero__imageOne)}
          src={imageOne}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageTwo)}
          src={imageTwo}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageThree)}
          src={imageThree}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageFour)}
          src={imageFour}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageFive)}
          src={imageFive}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageSix)}
          src={imageSix}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageEight)}
          src={imageEight}
        />
        <img
          className={clsx(styles.hero__image, styles.hero__imageNine)}
          src={imageNine}
        />
      </div>
    </div>
  );
};

export default Hero;
