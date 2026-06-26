"use client";

import { useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import Link from "next/link";
import { shops, mugs } from "@/data";
import { mapContent } from "@/data/content";
import styles from "@/styles/Map.module.css";

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DEFAULT_CENTER = { lat: 33.50, lng: 130.43 };
const DEFAULT_ZOOM = 11;

function MapContent() {
  const searchParams = useSearchParams();
  const shopParam = searchParams.get("shop");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const [selected, setSelected] = useState<string | null>(shopParam);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  const selectedShop = shops.find((s) => s.id === selected);
  const selectedMug = selectedShop ? mugs.find((m) => m.id === selectedShop.mugId) : null;

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
    if (shopParam) {
      const shop = shops.find((s) => s.id === shopParam);
      if (shop) {
        map.panTo({ lat: shop.lat, lng: shop.lng });
        map.setZoom(16);
      }
    }
  }, [shopParam]);

  const handleReset = useCallback(() => {
    setSelected(null);
    if (mapInstance) {
      mapInstance.panTo(DEFAULT_CENTER);
      mapInstance.setZoom(DEFAULT_ZOOM);
    }
  }, [mapInstance]);

  const handleSelectShop = (shopId: string) => {
    const newId = shopId === selected ? null : shopId;
    setSelected(newId);
    if (newId) {
      const shop = shops.find((s) => s.id === newId);
      if (shop && mapInstance) {
        mapInstance.panTo({ lat: shop.lat, lng: shop.lng });
        mapInstance.setZoom(16);
      }
    } else if (mapInstance) {
      mapInstance.panTo(DEFAULT_CENTER);
      mapInstance.setZoom(DEFAULT_ZOOM);
    }
  };

  return (
    <div className={styles.mapSection}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <p className={styles.listLabel}>{mapContent.listLabel}（{shops.length}店舗）</p>
          {selected && (
            <button className={styles.resetButton} onClick={handleReset}>
              ← 全体表示に戻る
            </button>
          )}
        </div>
        <div className={styles.shopList}>
          {shops.map((shop) => (
            <button
              key={shop.id}
              onClick={() => handleSelectShop(shop.id)}
              className={`${styles.shopItem} ${selected === shop.id ? styles.shopItemActive : ""}`}
            >
              <p className={styles.shopItemName}>{shop.name}</p>
              <p className={styles.shopItemArea}><PinIcon />{shop.area}</p>
              {selected === shop.id && (
                <div className={styles.shopDetail}>
                  <p className={styles.shopDetailAddress}>{shop.address}</p>
                  <p className={styles.shopDetailDesc}>{shop.description}</p>
                  <Link
                    href={`/mugs/${shop.mugId}`}
                    className={styles.mugLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {mapContent.mugLink}
                  </Link>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mapArea}>
        {isLoaded ? (
          <GoogleMap
            mapContainerClassName={styles.mapContainer}
            center={DEFAULT_CENTER}
            zoom={DEFAULT_ZOOM}
            onLoad={onMapLoad}
          >
            {shops.map((shop) => (
              <Marker
                key={shop.id}
                position={{ lat: shop.lat, lng: shop.lng }}
                onClick={() => handleSelectShop(shop.id)}
              />
            ))}
            {selectedShop && (
              <InfoWindow
                position={{ lat: selectedShop.lat, lng: selectedShop.lng }}
                onCloseClick={handleReset}
              >
                <div style={{ padding: "10px 12px 12px", maxWidth: "240px", fontFamily: "'Noto Sans JP', sans-serif" }}>
                  <p style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1008", marginBottom: "2px", lineHeight: 1.3 }}>
                    {selectedShop.name}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "10px" }}>
                    {selectedShop.area}
                  </p>
                  <div style={{ borderTop: "1px solid #eee", marginBottom: "10px" }} />
                  <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "12px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.5, margin: 0 }}>
                      {selectedShop.address}
                    </p>
                  </div>
                  {selectedMug && (
                    <Link href={`/mugs/${selectedShop.mugId}`} style={{ display: "block", textDecoration: "none" }}>
                      <img
                        src={selectedMug.imageUrl}
                        alt={`${selectedShop.name}のマグカップ`}
                        style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "4px", display: "block" }}
                      />
                      <p style={{ fontSize: "0.75rem", color: "#6B4226", textAlign: "center", marginTop: "6px" }}>
                        詳しく見る →
                      </p>
                    </Link>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <div className={styles.mapLoading}>読み込み中...</div>
        )}
      </div>
    </div>
  );
}

export default function MapPage() {
  return (
    <div className={styles.page}>
      <div className={styles.headingSection}>
        <h1 className={styles.heading}>{mapContent.heading}</h1>
        <p className={styles.body}>{mapContent.body}</p>
      </div>
      <Suspense fallback={<div className={styles.mapLoading}>読み込み中...</div>}>
        <MapContent />
      </Suspense>
    </div>
  );
}
