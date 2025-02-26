'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import dtriv_logo from '../assets/DhairyaTrivediSignature.png';
import githubLogoDark from '../assets/github_icon_black.svg';
import githubLogo from '../assets/github_icon_white.svg';
import instaLogoDark from '../assets/insta_icon_black.svg';
import instaLogo from '../assets/insta_icon_white.svg';
import linkedinLogoDark from '../assets/linkedin_icon_black.svg';
import linkedinLogo from '../assets/linkedin_icon_white.svg';
import menuIcon from '../assets/menu_icon.svg';
import menuIconDark from '../assets/menu_icon_black.svg';
import styles from './Navbar.module.css';
import { Flex, Group, Stack } from '@mantine/core';

const socialLinks = (scrolled: boolean) => {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/dhairya-trivedi-44b356144/"
        className={styles.socialLink}
        target="_blank"
      >
        <img src={scrolled ? linkedinLogoDark.src : linkedinLogo.src} />
      </Link>
      <Link href="https://github.com/dtriv97" className={styles.socialLink} target="_blank">
        <img src={scrolled ? githubLogoDark.src : githubLogo.src} />
      </Link>
      <Link href="https://www.instagram.com/dtriv97/" className={styles.socialLink} target="_blank">
        <img src={scrolled ? instaLogoDark.src : instaLogo.src} />
      </Link>
    </>
  );
};

const textLinks = () => {
  return (
    <>
      <Link className={styles.navLinks} href="#about">
        About
      </Link>
      <Link className={styles.navLinks} href="#services">
        Services
      </Link>
      <Link className={styles.navLinks} href="#contact">
        Contact
      </Link>
    </>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Group className={styles.navbarWrapper} justify="space-between">
        <div className={styles.logoContainer}>
          {scrolled && <img src={dtriv_logo.src} className={styles.logo} />}
        </div>
        <Group className={styles.navLinksGroup} justify="space-evenly">
          {textLinks()}
        </Group>
        <Group className={styles.socialContainer} justify="space-between">
          {socialLinks(scrolled)}
        </Group>
      </Group>
      <div className={styles.mobileNavContainer}>
        <Group style={{ width: '100%' }}>
          <div className={styles.logoContainer}>
            {scrolled && <img src={dtriv_logo.src} className={styles.logo} />}
          </div>
          <img
            src={scrolled ? menuIconDark.src : menuIcon.src}
            className={styles.mobileMenuIcon}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </Group>
        {mobileMenu && (
          <Stack align="center" style={{ paddingBottom: '2rem', width: '100%' }} gap="lg">
            {textLinks()}
            <Group>{socialLinks(scrolled)}</Group>
          </Stack>
        )}
      </div>
    </nav>
  );
}
