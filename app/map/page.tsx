"use client";

import { useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import Link from "next/link";
import { shops, mugs, type Shop, type Mug } from "@/data";
import { mapContent } from "@/data/content";
import styles from "@/styles/Map.module.css";
import { PinIcon } from "@/components/icons";

function createCoffeePinUrl(isSelected: boolean): string {
  const color = isSelected ? "#3d1f0a" : "#6B4226";
  // 円弧を上半分2分割で描くことで確実に頭部を塗りつぶす
  // 左端(8,22)→頂点(22,6)→右端(36,22) の2つのminor arc (sweep=1)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="60" viewBox="0 0 44 60">
    <path d="M22 58 C16 47 6 38 6 22 A16 16 0 0 1 22 4 A16 16 0 0 1 38 22 C38 38 28 47 22 58Z" fill="white"/>
    <path d="M22 55 C16 45 8 36 8 22 A14 14 0 0 1 22 6 A14 14 0 0 1 36 22 C36 36 28 45 22 55Z" fill="${color}"/>
    <g transform="translate(14,8.4) scale(0.8)" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    </g>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const DEFAULT_CENTER = { lat: 33.50, lng: 130.43 };
const DEFAULT_ZOOM = 11;

// InfoWindow は Google Maps の DOM 内に描画されるため CSS Modules が使えない
const infoWindowStyle = {
  container: { padding: "10px 12px 12px", maxWidth: "240px", fontFamily: "'Noto Sans JP', sans-serif" },
  name: { fontWeight: 700, fontSize: "1rem", color: "#1a1008", marginBottom: "2px", lineHeight: 1.3 },
  area: { fontSize: "0.75rem", color: "#999", marginBottom: "10px" },
  divider: { borderTop: "1px solid #eee", marginBottom: "10px" },
  addressRow: { display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "12px" },
  addressText: { fontSize: "0.8rem", color: "#555", lineHeight: 1.5, margin: 0 } as const,
  mugLink: { display: "block", textDecoration: "none" },
  mugImage: { width: "100%", height: "160px", objectFit: "cover" as const, borderRadius: "4px", display: "block" },
  mugLinkLabel: { fontSize: "0.75rem", color: "#6B4226", textAlign: "center" as const, marginTop: "6px" },
};

type ShopInfoWindowProps = { shop: Shop; mug: Mug | null | undefined; onClose: () => void };

function ShopInfoWindow({ shop, mug, onClose }: ShopInfoWindowProps) {
  return (
    <InfoWindow position={{ lat: shop.lat, lng: shop.lng }} onCloseClick={onClose}>
      <div style={infoWindowStyle.container}>
        <p style={infoWindowStyle.name}>{shop.name}</p>
        <p style={infoWindowStyle.area}>{shop.area}</p>
        <div style={infoWindowStyle.divider} />
        <div style={infoWindowStyle.addressRow}>
          <PinIcon size={13} color="#888" />
          <p style={infoWindowStyle.addressText}>{shop.address}</p>
        </div>
        {mug && (
          <Link href={`/mugs/${shop.mugId}`} style={infoWindowStyle.mugLink}>
            <img
              src={mug.imageUrl}
              alt={`${shop.name}のマグカップ`}
              style={infoWindowStyle.mugImage}
            />
            <p style={infoWindowStyle.mugLinkLabel}>詳しく見る →</p>
          </Link>
        )}
      </div>
    </InfoWindow>
  );
}

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

  const panToShop = useCallback((shop: Shop, map: google.maps.Map) => {
    map.panTo({ lat: shop.lat, lng: shop.lng });
    map.setZoom(16);
  }, []);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
    if (shopParam) {
      const shop = shops.find((s) => s.id === shopParam);
      if (shop) panToShop(shop, map);
    }
  }, [shopParam, panToShop]);

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
    if (newId && mapInstance) {
      const shop = shops.find((s) => s.id === newId);
      if (shop) panToShop(shop, mapInstance);
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
                icon={{
                  url: createCoffeePinUrl(selected === shop.id),
                  scaledSize: new window.google.maps.Size(44, 60),
                  anchor: new window.google.maps.Point(22, 58),
                }}
              />
            ))}
            {selectedShop && (
              <ShopInfoWindow shop={selectedShop} mug={selectedMug} onClose={handleReset} />
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
