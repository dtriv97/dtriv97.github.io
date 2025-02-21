import { Group, Stack, Title } from "@mantine/core";
import styles from "./introCard.module.css";

export default function IntroSection() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introCard}>
        <p className={styles.introText}>Hi, I am</p>
        <h1 className={styles.nameText}>Dhairya Trivedi</h1>
      </div>
      <div className={styles.subtitleWrapper}>
        <Group>
          <SubtitleCard title="Embedded" img="" />
          <SubtitleCard title="Full Stack" img="" />
          <SubtitleCard title="Photography" img="" />
        </Group>
      </div>
    </div>
  );
}

function SubtitleCard({ title, img }: { title: string; img: string }) {
  return (
    <Stack>
      <Title size={5}>{title}</Title>
      <img src={img} alt="img" />
    </Stack>
  );
}
