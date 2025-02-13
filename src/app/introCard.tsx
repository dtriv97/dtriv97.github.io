import profilePhoto from "../assets/profilePhoto.png";
import styles from "./introCard.module.css";

export default function IntroCard() {
  return (
    <div className={styles.introCard}>
      <div className={styles.profileImageContainer}>
        <img src={profilePhoto.src} className={styles.profilePhoto} />
      </div>
      <p className={styles.introText}>Hi, I am</p>
      <h1 className={styles.nameText}>Dhairya Trivedi</h1>
    </div>
  );
}
