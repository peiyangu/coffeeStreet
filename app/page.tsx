import Link from "next/link";
import Image from "next/image";
import { mugs, shops } from "@/data";
import { homeContent, siteConfig } from "@/data/content";
import styles from "@/styles/Home.module.css";

const featuredMugs = mugs.slice(0, 3);

const BookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const CupIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
  </svg>
);

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SmallPinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const conceptIcons = [<BookIcon key="book" />, <CupIcon key="cup" />, <PinIcon key="pin" />];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero.png"
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
            {homeContent.stats.map((stat, i) => (
              <div key={stat.label}>
                <p className={styles.statValue}>{i === 0 ? shops.length : mugs.length}</p>
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
                  <p className={styles.mugCardArea}><SmallPinIcon />{mug.area}</p>
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
