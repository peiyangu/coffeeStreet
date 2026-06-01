"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Header.module.css";
import { siteConfig, nav } from "@/data/content";

const MugIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <MugIcon />
          {siteConfig.name}
        </Link>

        <nav className={styles.nav}>
          <Link href="/mugs" className={styles.navLink}>{nav.mugs}</Link>
          <Link href="/#concept" className={styles.navLink}>{nav.concept}</Link>
          <Link href="/map" className={styles.navLink}>{nav.stores}</Link>
          <Link href="/join" className={styles.navCta}>{nav.join}</Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/mugs" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{nav.mugs}</Link>
          <Link href="/#concept" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{nav.concept}</Link>
          <Link href="/map" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{nav.stores}</Link>
          <Link href="/join" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>{nav.join}</Link>
        </div>
      )}
    </header>
  );
}
