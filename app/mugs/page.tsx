import Link from "next/link";
import Image from "next/image";
import { mugs } from "@/data";
import { mugsContent } from "@/data/content";
import styles from "@/styles/Mugs.module.css";

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function MugsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.heading}>{mugsContent.heading}</h1>
          <p className={styles.body}>{mugsContent.body}</p>
        </div>

        <div className={styles.grid}>
          {mugs.map((mug) => (
            <Link key={mug.id} href={`/mugs/${mug.id}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={mug.imageUrl}
                  alt={mug.shopName}
                  fill
                  className={styles.image}
                />
                <span className={styles.badge}>{mug.number}</span>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardName}>{mug.shopName}</h2>
                <p className={styles.cardArea}><PinIcon />{mug.area}</p>
                <p className={styles.cardStory}>{mug.storyIntro}</p>
                <p className={styles.cardCta}>{mugsContent.cardCta} <span>→</span></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
