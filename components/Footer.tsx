import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { siteConfig, footerContent } from "@/data/content";

const MugIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <MugIcon />
              {siteConfig.name}
            </Link>
            <p className={styles.tagline}>{footerContent.tagline}</p>
            <p className={styles.description}>{footerContent.description}</p>
          </div>

          <nav className={styles.navSection}>
            <p className={styles.navLabel}>{footerContent.pagesLabel}</p>
            {footerContent.links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
