"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Header.module.css";
import { siteConfig, nav } from "@/data/content";
import { MugIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/mugs", label: nav.mugs },
  { href: "/#concept", label: nav.concept },
  { href: "/map", label: nav.stores },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <MugIcon />
          {siteConfig.name}
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link href="/join" className={styles.mobileCta} onClick={closeMenu}>{nav.join}</Link>
        </div>
      )}
    </header>
  );
}
