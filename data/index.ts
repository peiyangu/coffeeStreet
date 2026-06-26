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
    id: "hiroshi-no-haco",
    name: "hirosHi.no.haco",
    area: "福岡県・筑紫野市",
    address: "福岡県筑紫野市原633-18",
    lat: 33.4977,
    lng: 130.5239,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-002",
  },
  {
    id: "hanjyo-coffee",
    name: "半畳コーヒー",
    area: "福岡県・久留米市",
    address: "福岡県久留米市東櫛原町2035",
    lat: 33.3140,
    lng: 130.5138,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-003",
  },
  {
    id: "hoshikuzu-coffee",
    name: "星屑COFFEE",
    area: "福岡県・福岡市東区",
    address: "福岡市東区志賀島1298-67",
    lat: 33.6830,
    lng: 130.2860,
    description: "ここに店舗の紹介を書く？",
    mugId: "mug-004",
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
    shopId: "hiroshi-no-haco",
    shopName: "hirosHi.no.haco",
    area: "福岡県・筑紫野市",
    imageUrl: publicPath("/images/mugs/S__55730195_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-003",
    number: "No. 003",
    shopId: "hanjyo-coffee",
    shopName: "半畳コーヒー",
    area: "福岡県・久留米市",
    imageUrl: publicPath("/images/mugs/S__55730196_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
  {
    id: "mug-004",
    number: "No. 004",
    shopId: "hoshikuzu-coffee",
    shopName: "星屑COFFEE",
    area: "福岡県・福岡市東区",
    imageUrl: publicPath("/images/mugs/S__55730197_0.jpg"),
    storyIntro: "ここにマグカップの紹介を書く？",
  },
];
