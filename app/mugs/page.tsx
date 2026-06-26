import Link from "next/link";
import Image from "next/image";
import { mugs } from "@/data";
import { mugsContent } from "@/data/content";
import styles from "@/styles/Mugs.module.css";
import { PinIcon } from "@/components/icons";

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
