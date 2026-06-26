import Link from "next/link";
import Image from "next/image";
import { mugs, shops } from "@/data";
import { homeContent, siteConfig } from "@/data/content";
import styles from "@/styles/Home.module.css";
import { PinIcon, BookIcon, MugIcon, CupIcon } from "@/components/icons";

const featuredMugs = mugs.slice(0, 3);

// コンセプトセクション用の大きなアイコン（28px）
const conceptIcons = [
  <BookIcon key="book" size={28} />,
  <CupIcon key="cup" size={28} />,
  <PinIcon key="pin" size={28} strokeWidth={1.2} />,
];

// stats の各ラベルに対応するデータソース
const statValues = { shops: shops.length, mugs: mugs.length };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/coffeeStreet/hero.png"
            alt="Coffee Street のヒーロー画像"
            fill
            priority
            className="object-cover"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{homeContent.hero.heading}</h1>
          <p className={styles.heroBody}>{homeContent.hero.body}</p>

          <div className={styles.heroButtons}>
            <Link href="/mugs" className={styles.btnPrimary}>{homeContent.hero.ctaPrimary}</Link>
            <Link href="/#concept" className={styles.btnOutline}>{homeContent.hero.ctaSecondary}</Link>
          </div>

          <div className={styles.heroStats}>
            {homeContent.stats.map((stat) => (
              <div key={stat.label}>
                <p className={styles.statValue}>{statValues[stat.dataKey]}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className={styles.conceptSection}>
        <div className={styles.conceptInner}>
          <h2 className={styles.sectionHeading}>{homeContent.concept.heading}</h2>
          <p className={styles.sectionSubheading}>{homeContent.concept.subheading}</p>

          <div className={styles.conceptGrid}>
            {homeContent.concept.items.map((item, i) => (
              <div key={item.title} className={styles.conceptItem}>
                <div className={styles.conceptIcon}>{conceptIcons[i]}</div>
                <h3 className={styles.conceptTitle}>{item.title}</h3>
                <p className={styles.conceptBody}>{item.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteHeading}>{homeContent.concept.quote.heading}</p>
            <p className={styles.quoteBody}>{homeContent.concept.quote.body}</p>
          </div>
        </div>
      </section>

      {/* Featured Mugs */}
      <section className={styles.mugsSection}>
        <div className={styles.mugsInner}>
          <div className={styles.mugsSectionHeader}>
            <h2 className={styles.mugsSectionHeading}>{homeContent.featuredMugs.heading}</h2>
            <p className={styles.mugsSectionBody}>{homeContent.featuredMugs.body}</p>
          </div>

          <div className={styles.mugsGrid}>
            {featuredMugs.map((mug) => (
              <Link key={mug.id} href={`/mugs/${mug.id}`} className={styles.mugCard}>
                <div className={styles.mugImageWrap}>
                  <Image
                    src={mug.imageUrl}
                    alt={mug.shopName}
                    fill
                    className={styles.mugImage}
                  />
                  <span className={styles.mugBadge}>{mug.number}</span>
                </div>
                <div className={styles.mugCardBody}>
                  <p className={styles.mugCardName}>{mug.shopName}</p>
                  <p className={styles.mugCardArea}><PinIcon size={11} />{mug.area}</p>
                  <p className={styles.mugCardStory}>{mug.storyIntro}</p>
                  <p className={styles.mugCardCta}>{homeContent.featuredMugs.cardCta} →</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.mugsCtaWrap}>
            <Link href="/mugs" className={styles.mugsAllCta}>{homeContent.featuredMugs.cta}</Link>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className={styles.joinSection}>
        <div className={styles.joinInner}>
          <h2 className={styles.joinHeading}>{homeContent.joinUs.heading}</h2>
          <p className={styles.joinBody}>{homeContent.joinUs.body}</p>

          <div className={styles.joinColumns}>
            <div>
              <h3 className={styles.joinColHeading}>加盟のメリット</h3>
              <ul className={styles.benefitList}>
                {homeContent.joinUs.benefits.map((b) => (
                  <li key={b.title} className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>·</span>
                    <div>
                      <p className={styles.benefitTitle}>{b.title}</p>
                      <p className={styles.benefitDesc}>{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={styles.joinColHeading}>加盟の流れ</h3>
              <ol className={styles.flowList}>
                {homeContent.joinUs.flow.map((step) => (
                  <li key={step.num} className={styles.flowItem}>
                    <span className={styles.flowNum}>{step.num}</span>
                    <div>
                      <p className={styles.flowTitle}>{step.title}</p>
                      <p className={styles.flowDesc}>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <Link href="/join" className={styles.joinCta}>{homeContent.joinUs.cta}</Link>
          <p className={styles.joinEmail}>{siteConfig.email}</p>
        </div>
      </section>
    </>
  );
}
