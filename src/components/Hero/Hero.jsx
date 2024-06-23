import styles from "./Hero.module.scss";
import imageOne from "../../images/code-thinking.svg";
import imageTwo from "../../images/coding.svg";
import imageThree from "../../images/developer.svg";
import imageFour from "../../images/devices.svg";
import imageFive from "../../images/join.svg";
import imageSix from "../../images/office.svg";
import imageSeven from "../../images/online.svg";
import imageEight from "../../images/user.svg";
import imageNine from "../../images/version-control.svg";
import avatar from "../../images/myAvatar.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>Hello, I am a Front-End Developer</h1>
      <p className={styles.hero__subtitle}>
        I code beautifully simple things, and I love what I do.
      </p>
      <img className={styles.hero__avatar} src={avatar} />
      <div className={styles.hero__images}>
        <img className={styles.hero__imageOne} src={imageOne} />
        <img className={styles.hero__imageTwo} src={imageTwo} />
        <img className={styles.hero__imageThree} src={imageThree} />
        <img className={styles.hero__imageThree} src={imageFour} />
        <img className={styles.hero__imageThree} src={imageFive} />
        <img className={styles.hero__imageThree} src={imageSix} />
        <img className={styles.hero__imageThree} src={imageSeven} />
        <img className={styles.hero__imageThree} src={imageEight} />
        <img className={styles.hero__imageThree} src={imageNine} />
      </div>
    </div>
  );
};

export default Hero;
