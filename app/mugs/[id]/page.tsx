import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { mugs, shops } from "@/data";
import { mugDetailContent } from "@/data/content";
import styles from "@/styles/MugDetail.module.css";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return mugs.map((mug) => ({ id: mug.id }));
}

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAF7F4" strokeWidth="1.5">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export default async function MugDetailPage({ params }: Props) {
  const { id } = await params;
  const mug = mugs.find((m) => m.id === id);
  if (!mug) notFound();

  const shop = shops.find((s) => s.id === mug.shopId);

  return (
    <div className={styles.page}>
      <div className={styles.backWrap}>
        <Link href="/mugs" className={styles.backLink}>{mugDetailContent.backLink}</Link>
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <Image src={mug.imageUrl} alt={mug.shopName} fill className={styles.image} />
            <span className={styles.imageBadge}>{mug.number}</span>
          </div>

          <div className={styles.info}>
            <p className={styles.area}><PinIcon />{mug.area}</p>
            <h1 className={styles.shopName}>{mug.shopName}</h1>

            <div className={styles.storyBlock}>
              <p className={styles.storyText}>{mug.storyIntro}</p>
            </div>

            <div className={styles.cardTeaser}>
              <div className={styles.cardTeaserIcon}><BookIcon /></div>
              <div>
                <p className={styles.cardTeaserHeading}>{mugDetailContent.cardTeaser.heading}</p>
                <p className={styles.cardTeaserBody}>{mugDetailContent.cardTeaser.body}</p>
              </div>
            </div>

            {shop && (
              <div className={styles.shopInfoSection}>
                <p className={styles.shopInfoLabel}>{mugDetailContent.shopInfoLabel}</p>
                <p className={styles.shopInfoName}>{shop.name}</p>
                <p className={styles.shopInfoAddress}>{shop.address}</p>
                <Link href={`/map?shop=${shop.id}`} className={styles.mapLink}>
                  <PinIcon />
                  {mugDetailContent.mapLink}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

