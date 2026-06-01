export type Shop = {
  id: string;
  name: string;
  area: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
  mugId: string;
};

export type Mug = {
  id: string;
  number: string;
  shopId: string;
  shopName: string;
  area: string;
  imageUrl: string;
  storyIntro: string;
};

const basePath = "/coffeeStreet";

const publicPath = (path: string) => `${basePath}${path}`;

export const shops: Shop[] = [
  {
    id: "baobab-coffee",
    name: "Baobab Coffee",
    area: "福岡県・久留米市",
    address: "福岡県久留米市朝妻町13-28",
    lat: 33.3152,
    lng: 130.5000,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-001",
  },
  {
    id: "seijaku",
    name: "喫茶 静寂",
    area: "京都・上長区",
    address: "京都市上京区寺町通丸太町上ル",
    lat: 35.0248,
    lng: 135.7683,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-002",
  },
  {
    id: "coffee-craft",
    name: "COFFEE & CRAFT",
    area: "東京・蔵前",
    address: "東京都台東区蔵前4-5-6",
    lat: 35.7031,
    lng: 139.7937,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-003",
  },
  {
    id: "morning-light",
    name: "朝光珈琲",
    area: "大阪・北浜",
    address: "大阪市中央区北浜2-7-8",
    lat: 34.6911,
    lng: 135.5117,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-004",
  },
  {
    id: "kiri-no-mori",
    name: "霧の森 珈琲",
    area: "京都・嵐山",
    address: "京都市右京区嵯峨天龍寺芒ノ馬場町",
    lat: 35.0094,
    lng: 135.6753,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-005",
  },
  {
    id: "harbor-blend",
    name: "ハーバー ブレンド",
    area: "横浜・元町",
    address: "神奈川県横浜市中区元町3-1",
    lat: 35.4437,
    lng: 139.6427,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-006",
  },
];

export const mugs: Mug[] = [
  {
    id: "mug-001",
    number: "No. 001",
    shopId: "baobab-coffee",
    shopName: "Baobab Coffee",
    area: "福岡県・久留米市",
    imageUrl: publicPath("/images/mugs/S__55730192_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-002",
    number: "No. 002",
    shopId: "seijaku",
    shopName: "喫茶 静寂",
    area: "京都・上長区",
    imageUrl: publicPath("/images/mugs/S__55730195_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-003",
    number: "No. 003",
    shopId: "coffee-craft",
    shopName: "COFFEE & CRAFT",
    area: "東京・蔵前",
    imageUrl: publicPath("/images/mugs/S__55730196_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-004",
    number: "No. 004",
    shopId: "morning-light",
    shopName: "朝光珈琲",
    area: "大阪・北浜",
    imageUrl: publicPath("/images/mugs/S__55730197_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-005",
    number: "No. 005",
    shopId: "kiri-no-mori",
    shopName: "霧の森 珈琲",
    area: "京都・嵐山",
    imageUrl: publicPath("/images/mugs/S__55730198_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-006",
    number: "No. 006",
    shopId: "harbor-blend",
    shopName: "ハーバー ブレンド",
    area: "横浜・元町",
    imageUrl: publicPath("/images/mugs/S__55730199_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
];
