import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { mugs, shops } from "@/data";
import { mugDetailContent } from "@/data/content";
import styles from "@/styles/MugDetail.module.css";
import { PinIcon, BookIcon, InstagramIcon } from "@/components/icons";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return mugs.map((mug) => ({ id: mug.id }));
}

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
              <div className={styles.cardTeaserIcon}>
                <BookIcon size={18} color="#FAF7F4" />
              </div>
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
                <div className={styles.shopLinks}>
                  <Link href={`/map?shop=${shop.id}`} className={styles.mapLink}>
                    <PinIcon />
                    {mugDetailContent.mapLink}
                  </Link>
                  <a href={shop.instagram} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
                    <InstagramIcon />
                    {mugDetailContent.instagramLink}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
