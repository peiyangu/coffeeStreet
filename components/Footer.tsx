import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { siteConfig, footerContent } from "@/data/content";
import { MugIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <MugIcon size={18} />
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
