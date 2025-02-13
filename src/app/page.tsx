import IntroCard from "./introCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <IntroCard />
    </div>
  );
}
