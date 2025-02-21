"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import dtriv_logo from "../assets/DhairyaTrivediSignature.png";
import githubLogoDark from "../assets/github_icon_black.svg";
import githubLogo from "../assets/github_icon_white.svg";
import instaLogoDark from "../assets/insta_icon_black.svg";
import instaLogo from "../assets/insta_icon_white.svg";
import linkedinLogoDark from "../assets/linkedin_icon_black.svg";
import linkedinLogo from "../assets/linkedin_icon_white.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarWrapper}>
        <div className={styles.logoContainer}>
          {scrolled && <img src={dtriv_logo.src} className={styles.logo} />}
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.socialContainer}>
          <Link
            href="https://www.linkedin.com/in/dhairya-trivedi-44b356144/"
            className={styles.socialLink}
            target="_blank"
          >
            <img src={scrolled ? linkedinLogoDark.src : linkedinLogo.src} />
          </Link>
          <Link
            href="https://github.com/dtriv97"
            className={styles.socialLink}
            target="_blank"
          >
            <img src={scrolled ? githubLogoDark.src : githubLogo.src} />
          </Link>
          <Link
            href="https://www.instagram.com/dtriv97/"
            className={styles.socialLink}
            target="_blank"
          >
            <img src={scrolled ? instaLogoDark.src : instaLogo.src} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
