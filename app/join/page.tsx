"use client";

import { joinContent, siteConfig } from "@/data/content";
import styles from "@/styles/Join.module.css";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function JoinPage() {
  const { hero, benefits, flow, form } = joinContent;

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>{hero.heading}</h1>
        <p className={styles.heroBody}>{hero.body}</p>
      </section>

      {/* Benefits & Flow */}
      <section className={styles.main}>
        <div>
          <h2 className={styles.colHeading}>{benefits.heading}</h2>
          <ul className={styles.benefitList}>
            {benefits.items.map((item) => (
              <li key={item.title} className={styles.benefitItem}>
                <span className={styles.benefitIcon}><CheckIcon /></span>
                <div>
                  <p className={styles.benefitTitle}>{item.title}</p>
                  <p className={styles.benefitDesc}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.colHeading}>{flow.heading}</h2>
          <ol className={styles.flowList}>
            {flow.steps.map((step) => (
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
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <h2 className={styles.formHeading}>{form.heading}</h2>
          <p className={styles.formEmail}>{siteConfig.email}</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div>
                <label className={styles.fieldLabel}>
                  {form.fields.shopName.label} <span className={styles.required}>{form.required}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={form.fields.shopName.placeholder}
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.fieldLabel}>
                  {form.fields.contactName.label} <span className={styles.required}>{form.required}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={form.fields.contactName.placeholder}
                  className={styles.input}
                />
              </div>
            </div>

            <div>
              <label className={styles.fieldLabel}>
                {form.fields.email.label} <span className={styles.required}>{form.required}</span>
              </label>
              <input
                type="email"
                required
                placeholder={form.fields.email.placeholder}
                className={styles.input}
              />
            </div>

            <div>
              <label className={styles.fieldLabel}>{form.fields.address.label}</label>
              <input
                type="text"
                placeholder={form.fields.address.placeholder}
                className={styles.input}
              />
            </div>

            <div>
              <label className={styles.fieldLabel}>{form.fields.message.label}</label>
              <textarea
                rows={5}
                placeholder={form.fields.message.placeholder}
                className={styles.textarea}
              />
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submitBtn}>{form.submit}</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
