import IntroSection from "./introCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <IntroSection />
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I am a software engineer, photographer and musician. I love to build
          things, break things, solve things ... basically a curious mind. I am
          passionate about music and photography and expressing myself through
          them.
        </p>
      </div>
    </>
  );
}
