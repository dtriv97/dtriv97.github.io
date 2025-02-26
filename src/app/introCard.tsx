import { Group, Stack, Title } from '@mantine/core';
import styles from './introCard.module.css';
import photoIcon from '../assets/photo_icon.svg';
import fullStackIcon from '../assets/full-stack_icon.svg';
import embeddedIcon from '../assets/embedded_icon.svg';

export default function IntroSection() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introCard}>
        <p className={styles.introText}>Hi, I am</p>
        <h1 className={styles.nameText}>Dhairya Trivedi</h1>
      </div>
      <div className={styles.subtitleWrapper}>
        <Group justify="space-between" align="baseline" className={styles.subtitleCardWrapper}>
          <SubtitleCard title="Embedded" img={embeddedIcon.src} />
          <SubtitleCard title="Full Stack" img={fullStackIcon.src} />
          <SubtitleCard title="Photography" img={photoIcon.src} />
        </Group>
      </div>
    </div>
  );
}

function SubtitleCard({ title, img }: { title: string; img: string }) {
  return (
    <Stack className={styles.subtitleCard}>
      <img src={img} alt="img" className={styles.subtitleImage} />
      <Title className={styles.subtitleText}>{title}</Title>
    </Stack>
  );
}
