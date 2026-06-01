"use client";

import { useState } from "react";
import Link from "next/link";
import { shops } from "@/data";
import { mapContent } from "@/data/content";
import styles from "@/styles/Map.module.css";

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function MapPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedShop = shops.find((s) => s.id === selected);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>{mapContent.heading}</h1>
        <p className={styles.body}>{mapContent.body}</p>

        <div className={styles.layout}>
          <div>
            <div className={styles.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207074.77699730988!2d139.57922!3d35.68389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8686b29b4e737!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1717200000000!5m2!1sja!2sjp"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee Street 加盟店マップ"
              />
            </div>

            {selectedShop && (
              <div className={styles.selectedCard}>
                <div>
                  <p className={styles.selectedName}>{selectedShop.name}</p>
                  <p className={styles.selectedAddress}><PinIcon />{selectedShop.address}</p>
                  <p className={styles.selectedDesc}>{selectedShop.description}</p>
                </div>
                <Link href={`/mugs/${selectedShop.mugId}`} className={styles.mugLink}>
                  {mapContent.mugLink}
                </Link>
              </div>
            )}
          </div>

          <div>
            <p className={styles.listLabel}>{mapContent.listLabel}（{shops.length}店舗）</p>
            <div className={styles.shopList}>
              {shops.map((shop) => (
                <button
                  key={shop.id}
                  onClick={() => setSelected(shop.id === selected ? null : shop.id)}
                  className={`${styles.shopBtn} ${selected === shop.id ? styles.shopBtnActive : ""}`}
                >
                  <p className={styles.shopBtnName}>{shop.name}</p>
                  <p className={styles.shopBtnArea}><PinIcon />{shop.area}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
